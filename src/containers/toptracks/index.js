import React, { Component } from "react";
import classes from "./styles.module.css";
import APIConfig from "../../api/APIConfig";
import TrackItem from "../../components/TrackItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class TopTracks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      search_results: [],
    };
    this.loadData = this.loadData.bind(this);
    this.handleSearchForm = this.handleSearchForm.bind(this);
  }
  componentDidMount() {
    this.loadData();
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate()");
    return true;
  }
  async handleSearchForm(event) {
    const value = event.target.value;
    if (value === "") {
      this.setState({ search_results: [] });
    } else {
      try {
        const { data } = await APIConfig.get(`/?method=track.search&track=${value}&api_key=aba4e57c4ea1e2ee07448977078cf1d6&format=json`);
        this.setState({ search_results: data.results.trackmatches.track });
      } catch (error) {
        alert("Oops terjadi masalah pada server");
        console.log(error);
      }
    }
  }
  async loadData() {
    try {
      const { data } = await APIConfig.get("/?method=chart.gettoptracks&api_key=aba4e57c4ea1e2ee07448977078cf1d6&format=json");
      this.setState({ items: data.tracks.track });
    } catch (error) {
      alert("Oops terjadi masalah pada server");
      console.log(error);
    }
  }
  render() {
    const settings = {
      dots: false,
      autoplay: true,
      infinite: true,
      speed: 2000,
      autoplaySpeed: 3500,
      slidesToShow: 5,
      slidesToScroll: 5,
    };
    return (
      <div>
        <h1 style={{ textAlign: "center", margin: "50px" }}>Top Tracks</h1>
        <div style={{ padding: "0 50px" }}>
          <Slider {...settings}>
            {this.state.items.slice(0, 15).map((item, index) => (
              <TrackItem key={index} title={item.name} artist={item.artist.name} image={item.image[2]["#text"]} />
            ))}
          </Slider>
        </div>

        <input className={classes.textField} type="search" placeholder="Find your favorite song" name="search" onChange={this.handleSearchForm} />
        <div className={classes.tracksHolder}>
          {this.state.search_results.slice(0, 10).map((item, index) => (
            <TrackItem key={index} title={item.name} artist={item.artist} image={item.image[2]["#text"]} />
          ))}
        </div>
      </div>
    );
  }
}

export default TopTracks;
