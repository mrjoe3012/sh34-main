'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '../../components/navbar';
import Document from "./../../images/Document-icon.png"
import { useState, useEffect, ChangeEventHandler } from 'react'
import { NextPage } from 'next';
import $ from 'jquery';

export default function graphEditor() {
	return (
	  <div className="text-black h-screen">
		<Navbar />       
		<Body />
	  </div>
	);
  } 

  
function Body() {
	const [plotHTML, setPlotHTML] = useState("");
	return (
		<div className="bg-gray-600 fixed left-60 z-11 right-0 h-[67%]">
		<Sidebar setPlotHTML={setPlotHTML} />
		<Footer />
		<div id='plot-container'/>
		</div>
	);
}

interface SidebarProps {
	setPlotHTML: (html: string) => void;
}

const Sidebar: NextPage<SidebarProps> = ({ setPlotHTML }) => {
	const [indicators, setIndicators] = useState([]);
	const [selIndicator, setSelIndicator] = useState('');
	const [selGraphType, setSelGraphType] = useState('');
	useEffect(() => {
		fetch('/api/load-indicators')
			.then((response) => response.json())
			.then((data) => {
				data = data.map((x: string, i: number) => {
					return <option key={x} value={i}>{x}</option>;
				});
				setIndicators(data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);
	const onGraphTypeChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
		const {name, value} = e.target;
		setSelGraphType(value);
	}
	const onIndicatorChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
		const {name, value} = e.target;
		setSelIndicator(value);
	}
	const onRefresh = async () => {
		try {
			const response = await fetch('/api/generate-plot?' + 'indicator=' + selIndicator + '&graph_type=' + selGraphType);
			const result = await response.text();
			setPlotHTML(result);
			$('#plot-container').html(result);
			console.log(result);
		} catch(error) {
			console.error("Error fetching new plot: ", error);
		}
	};
	return(
		<div className="p-3 h-[87%] bottom-0 bg-white z-10 fixed w-60 left-0 flex-col justify-center">
			<div className="flex-grow">
				<div className="flex justify-center"><select name="graph-types" id="graph-types" onChange={onGraphTypeChange}>
					<option key = "scatter" value="scatter">Scatter</option>
					<option key = "line" value="line">Line</option>
					<option key = "bar" value="bar">Bar</option>
				</select></div>
				<h1 className="text-4xl text-RES_ORANGE font-bold p-6 flex justify-center hover:font-bold">Title</h1>
				<hr className="h-0.5 border-none bg-RES bg-gray-500"></hr>  
				<h3 className="text-2xl text-RES_ORANGE font-bold p-6 flex justify-center hover:font-bold">General</h3>
				<h3 className="text-2xl text-RES_ORANGE font-bold p-6 flex justify-center hover:font-bold">Labelling</h3>
				<h3 className="text-2xl text-RES_ORANGE font-bold p-6 flex justify-center hover:font-bold">Visual</h3>
				<div className="flex justify-center"><select name="indicators" id="indicators" onChange={onIndicatorChange}>
					{indicators}
				</select></div>
			</div>

			<div className="flex flex-col items-center justify-center w-full gap-y-2">
				<div className="p-1 w-[80%] flex flex-col items-center bg-COMPLETE"><button className=" text-2xl text-white font-bold p-4" onClick={onRefresh}>Refresh</button></div>
				<div className="p-1 w-[80%] flex flex-col items-center bg-gray-300" ><button className=" text-2xl text-black font-bold p-4 ">Upload</button></div>
				<div className="p-1 w-[80%] flex flex-col items-center bg-FINISH"><button className=" text-2xl text-white font-bold p-4">Finish</button></div>
			</div>
		</div>
	);
}

function Footer(){
	return(
		<footer className="fixed bottom-0 left-60 bg-white z-11 right-0 h-[20%]">
			<div className='inherit'>
				<div className='grid grid-cols-6 p-3'>
					<div className='col-start-1 col-end-2'>
					<h2 className="text-lg">Plot type</h2>
					</div>
					<div className='col-start-3 col-end-4'>
					<h2 className='text-lg'>No. of Assets</h2>
					</div>
					<div className='col-start-4 col-end-5'>
					<h2 className='text-lg'>No. of Assets</h2>
					</div>
					<div className='col-start-5 col-end-6'>
					<h2 className='text-lg'>No. of Assets</h2>
					</div>
					<div className='col-start-6 col-end-7'>
					<h2 className='text-lg'>No. of Assets</h2>
					</div>
				</div>
				<hr className="h-1 bg-RES_ORANGE boder-none "></hr>
			</div>
		</footer>
	);
}