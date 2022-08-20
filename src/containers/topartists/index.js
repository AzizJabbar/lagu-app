import React, { Component } from "react";
import APIConfig from "../../api/APIConfig";
import classes from "./styles.module.css";
import ArtistItem from "../../components/ArtistItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class TopArtists extends Component {
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
        const { data } = await APIConfig.get(`/?method=artist.search&artist=${value}&api_key=aba4e57c4ea1e2ee07448977078cf1d6&format=json`);
        this.setState({ search_results: data.results.artistmatches.artist });
      } catch (error) {
        alert("Oops terjadi masalah pada server");
        console.log(error);
      }
    }
  }
  async loadData() {
    try {
      const { data } = await APIConfig.get("/?method=chart.gettopartists&api_key=aba4e57c4ea1e2ee07448977078cf1d6&format=json");
      this.setState({ items: data.artists.artist });
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
        <h1 style={{ textAlign: "center", margin: "50px" }}>Top Artists</h1>
        <div style={{ padding: "0 50px" }}>
          <Slider {...settings}>
            {this.state.items.slice(0, 15).map((item, index) => (
              <ArtistItem key={index} name={item.name} image={item.image[2]["#text"]} />
            ))}
          </Slider>
        </div>
        <input className={classes.textField} type="search" placeholder="Find your favorite artist" name="search" onChange={this.handleSearchForm} />
        <div className={classes.artistsHolder}>
          {this.state.search_results.slice(0, 10).map((item, index) => (
            <ArtistItem key={index} name={item.name} image={item.image[2]["#text"]} />
          ))}
        </div>
      </div>
    );
  }
}

export default TopArtists;
