export class ClientHBManager {
  private pageRoute: string;
  private key: string;

  constructor(route: string, key:string) {
    console.log('ClientHBManager constructor called with route:', route);
    this.pageRoute = route;
    this.key = key;
  }

  public async heartbeat(): Promise<boolean> {
    console.log('Heartbeat function called.');

    const request = {
      key: this.key,
      pageRoute: this.pageRoute,
    };

    try {
      console.log('Sending heartbeat request to /api/client-heartbeat.');

      const response = await fetch('/api/client-heartbeat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        console.error(`Heartbeat request failed with status ${response.status}`);
        return false;
      }

      console.log('Heartbeat request successful. Processing response.');

      const responseData = await response.json();
      this.key = responseData.key;

      console.log('Key updated:', this.key);
      console.log("Response:", responseData);

      return this.key.length > 0;
    } catch (error) {
      console.error(
        `An error has occurred during a heartbeat. key: ${this.key} pageRoute: ${this.pageRoute} error: ${error}`
      );
      return false;
    }
  }

  public getKey(): string {
    return this.key;
  }
}
