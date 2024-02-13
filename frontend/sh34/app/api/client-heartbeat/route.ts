interface RequestData {
    pageRoute: string,
    key: string,
};

interface HeartbeatRecord {
    pageRoute: string,
    key: string,
    time: Date,
};

var heartbeatState: Array<HeartbeatRecord> = [];

function generateKey(): string {
    console.log('Generating a new key.');
    const max = 100000;
    var key: string | null = null;
    do {
        key = Math.floor(Math.random() * max).toString();
    } while(heartbeatState.map((r) => r.key).includes(key));
    console.log('Generated key:', key);
    return key;
}

function checkStale(record: HeartbeatRecord): boolean {
    console.log('Checking if record is stale.');
    // stale after 10 seconds
    const staleAfter = 10 * 1000;
    const isStale = (Date.now() - record.time.getTime()) > staleAfter;
    console.log('Record is stale:', isStale);
    return isStale;
}

export async function POST(request: Request) {
    console.log('Received POST request.');
    
    const requestData: RequestData = await request.json();
    const pageRoute = requestData.pageRoute;
    const key = requestData.key;
    console.log(`Key: ${key}`)

    const recordExists = heartbeatState.map((r) => r.pageRoute).includes(pageRoute);
    const ownedByRequester = recordExists ? heartbeatState.filter((r) => r.pageRoute == pageRoute)[0].key == key : false;
    var recordStale = recordExists ? checkStale(heartbeatState.filter((r) => r.pageRoute == pageRoute)[0]) : false;

    console.log('Record exists:', recordExists);
    console.log('Owned by requester:', ownedByRequester);
    console.log('Record is stale:', recordStale);
    
    if (recordExists && !recordStale) {
        if (ownedByRequester) {
            console.log('Updating existing record owned by the requester.');
            var record: HeartbeatRecord = heartbeatState.filter((r) => r.pageRoute == pageRoute)[0];
            record['time'] = new Date(Date.now());
            console.log('Updated record:', record);
            return Response.json(
                {'key' : record.key},
                {'status' : 200}
            );
        } else {
            console.log('Existing record found but not owned by the requester.');
            return Response.json(
                {'key' : ''},
                {'status': 200}
            );
        }
    } else {
        console.log('Creating a new record.');
        var record: HeartbeatRecord = {
            'pageRoute' : pageRoute,
            'key' : '',
            'time' : new Date(),
        };
        if (recordExists)
            record = heartbeatState.filter((r) => r.pageRoute == pageRoute)[0];
        else
            heartbeatState = [...heartbeatState, record];
        record['time'] = new Date(Date.now());
        record['key'] = generateKey();
        console.log('New record created:', record);
        return Response.json(
            {'key' : record['key']},
            {'status' : 200}
        );
    }
}
