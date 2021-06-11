import React, { Component } from 'react';
import './photos.css'
import Popup from './popup'
 
class Photos extends Component  {
    constructor(props){
        super(props)
        this.state={
            imageUrl:'',
            imageUrlArray:[
                "https://cdn.britannica.com/w:1100/80/140480-131-28E57753/Dromedary-camels.jpg",
                "https://aldf.org/wp-content/uploads/2018/05/lamb-iStock-665494268-16x9-e1559777676675-1200x675.jpg",
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-168504892-1568303467.png?crop=0.754xw:0.911xh;0.191xw,0.0454xh&resize=640:*",
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-baby-animals-1558535060.jpg?crop=0.752xw:1.00xh;0.125xw,0&resize=640:*",
                "https://pbs.twimg.com/profile_images/841126482151911426/MZ-7AaQh_400x400.jpg"
            ],
            showModel: false,
            popImage: ''
        }
    }

    handlePopup = (url) => {
        this.setState({
            showModel: !this.state.showModel,
            popImageUrl: url
        })
    }

    imageSubmitter = (e) => {
        e.preventDefault();
        let imageUrlArray =  this.state.imageUrlArray;
        imageUrlArray.push (this.state.imageUrl)
        this.setState({
            imageUrlArray: imageUrlArray
        })
    }

    handleLinkChange = (e) => {
        e.preventDefault();
        this.setState({
            imageUrl : e.target.value
        })
    }

    
    render(){
        let imageUrlArray = this.state.imageUrlArray;
        const images = imageUrlArray.map((url,index) => {
            return (
                <img 
                    alt = ""
                    className = 'singleImage'
                    src={url}
                    key={index}
                    onClick={() => this.handlePopup(url)}
                />
            )
        })

        return ( 
            
            <div className='Images'>
                <form onSubmit={this.imageSubmitter}>
                    <input
                    type='text'
                    placeholder="insert iamge url"
                    onChange={this.handleLinkChange}>                        
                    </input>
                    <button type='submit' className="submitButton" > submit image </button>
                </form>
                
                {images}
                {this.state.showModel ? (
                    <Popup 
                    popImageUrl={this.state.popImageUrl} 
                    closePopup={this.handlePopup}/>
                ) : null }
            </div>
         );
    }
    
}
 
export default Photos;
