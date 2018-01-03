
import React,{ Component } from 'react';  // React library for working with components
import ReactDom from 'react-dom';  //Reactdom for inserting components into DOM
import _ from 'lodash';
import YTSeach from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_details.js';

//const is an ES6 property

const API_KEY='AIzaSyCc3RPEwgKcJ2Uycxwi7LzMceY9DL2NhwI';


class App extends Component{  //(function equivalent to fat arrow(es6))
	
	constructor(props){
		super(props);
		this.state={
			videos:[],
			selectedVideo:null
		};
		this.videoSearch('how to code');
	}

	videoSearch(term){	
		YTSeach({key:API_KEY,term:term},(videos)=>{
			this.setState({
				videos:videos,
				selectedVideo:videos[0]
			});
			//ES6 this.setState({videos:videos});
		});
	};

	render(){

		const videoSearch=_.debounce((term)=>{this.videoSeacrh(term)},300);
		return (
			<div>
				<SearchBar onSearchChange={term=>this.videoSearch(term)}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
				 onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				 videos={this.state.videos}/>
			</div>
			);
	} 
}
	

ReactDom.render(<App/>,document.querySelector('.container'));

{/* App is a class component .<App/> converts it into an instance(component instance).And reactdom requires an instance
<App/> => React.createElement(....App)
also SX syntax babeljs converts JSX into vanilla javascript */}