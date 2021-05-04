import React, { Component } from "react";
import PokemonCard from "../pokemon/PokemonCard";
import Loading from "../layout/Loading";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

export default class PokemonCarrosel extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0",
    pokemon: null,
    currentPage: [],
    next: "",
    prev: "",
  };

  async fetchPokemons(url) {
    const res = await axios.get(url);
    this.setState({ pokemon: res.data["results"]});
    this.setState({ currentPage: this.renderPageNumbers(res.data["results"]) });
  }

  async componentDidMount() {
    console.log(this.state.url);
    this.fetchPokemons(this.state.url);
  }

  renderPageNumbers(pokemon) {
      let items = [];
      let qtdImgs = 0;
    for (let i = 0; i < 4; i++) {
        items.push(pokemon.slice(qtdImgs, qtdImgs + 5));
        qtdImgs += 5;
      }
    return items;
  }

  render() {
    return (
      <div>
        {this.state.pokemon ? (
          <div className="slider">
            <Carousel style={{ width: "50%" }}>
              {this.state.currentPage.map((currentPage, index) => (
                <Carousel.Item key={index}>
                  {currentPage.map((pokemon,subindex) => (
                    <PokemonCard
                      key={subindex}
                      name={pokemon.name}
                      url={pokemon.url}
                    />
                  ))}
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}
