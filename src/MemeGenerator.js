import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        // prevents default from happening
        event.preventDefault()
        // since there are 100 memes, it will choose one of those
        let randomNumber = Math.floor(Math.random()*100)
        this.setState({
            randomImg: this.state.allMemeImgs[randomNumber].url
        })
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.topText} 
                            name="topText" 
                            placeholder="Top text"
                            onChange={this.handleChange} />
                    <input type="text" value={this.state.bottomText} 
                            name="bottomText" 
                            placeholder="Bottom text"
                            onChange={this.handleChange} />
                    <button>Generate!</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} className="generated-img"/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator