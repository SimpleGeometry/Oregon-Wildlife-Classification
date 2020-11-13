import React, { Component } from 'react';
import { Container, Row, Jumbotron } from 'react-bootstrap';
import * as d3 from 'd3';
//import csv_data from "../data/dots.csv";

class DataEmb extends Component {

	constructor(props) {
		super(props);
		this.createDotPlot = this.createDotPlot.bind(this);
	}

	componentDidMount() {
		this.createDotPlot();
	}

	componentDidUpdate() {
		this.createDotPlot();
	}

	createDotPlot() {
		const svg = d3.select('svg');
		const width = +svg.attr('width');
		const height = +svg.attr('height');

		const render = data => {
			const xValue = d => d.x;
			const yValue = d => d.y;
			const margin = {top: 20, right: 100, bottom: 20, left: 100 };
			const innerWidth = width - margin.left - margin.right;
			const innerHeight = height - margin.top - margin.bottom;

			const xScale = d3.scaleLinear()
				.domain([0, d3.max(data, xValue)] * 1.5)
				.range([0, innerWidth]);

			const yScale = d3.scaleLinear()
				.domain([0, d3.max(data, yValue)] * 1.5)
				.range([0, innerHeight]);

			const yAxis = d3.axisLeft(yScale);

			const xAxis = d3.axisTop(xScale);

			const g = svg.append('g')
				.attr('transform' , `translate(${margin.left}, ${margin.top})`);

			g.append('g').call(xAxis);
			g.append('g').call(yAxis);

		}
	}

	render() {
		return (
			<div>
				<Jumbotron fluid>
					<Container></Container>
				</Jumbotron>
				<Container>
					<Row className="justify-content-center">
						<svg
							ref={node => this.node = node}
							width={1200} height={400}
						></svg>
					</Row>
				</Container>
			</div>
		)
		}
}

export default DataEmb;