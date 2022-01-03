import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch  from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDatail from './components/video_detail';
import '../src/style.css';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
const API_KEY = 'AIzaSyDXn9khACb_UEtZVIne-1IxTQTVIp2PU2M';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
            term:''
        }
        this.onSearchTerm('multidots');
         
    }
    onSearchTerm(term){
        YTSearch({key:API_KEY, term: term }, ( videos ) => {
            // console.log(videos);
             this.setState({
                 videos: videos, 
                 selectedVideo: videos[0]
             })
         });
    }
    render(){
        return( 
            <div className="video-main">
                <div className="container">
                    <SearchBar OnSearchTermChange={term => this.onSearchTerm(term) } />
                    <VideoDatail video={this.state.selectedVideo} />
                    <VideoList onVideoSelected={(selectedVideo) => this.setState({selectedVideo} )} videos={this.state.videos} />
                </div>
            </div>
                
            );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));