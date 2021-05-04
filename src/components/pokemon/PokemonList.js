import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import Loading from '../layout/Loading';
import axios from 'axios';
import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";

export default class PokemonList extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0",
    pokemon: null,
    currentPage: 0,
    next: "",
    prev: "",
  };

  async componentDidMount() {
    console.log(this.state.url)
    this.fetchPokemons(this.state.url, 0);
  }

  buildUrl(offset) {
    return `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`;
  }

  async fetchPokemons(url, pageCounter) {
    const res = await axios.get(url);
    this.setState({ currentPage: this.state.currentPage + pageCounter, pokemon: res.data["results"], next: res.data["next"], prev: res.data["previous"] });
  }


  async handlePageChange(pageNumber) {
    let offset = pageNumber * 20;
    const url = this.buildUrl(offset);
    this.setState({ url, currentPage: pageNumber });
    await this.fetchPokemons(url, 0);
  }

  async handleNextPage() {
    if ( this.state.next !== null ) {
      this.fetchPokemons(this.state.next, 1)
    }
  }

  async handlePreviousPage() {
    if ( this.state.prev !== null && this.state.currentPage !== 0 ) {
      this.fetchPokemons(this.state.prev, -1)
    }
  }

  renderPageNumbers() {
    let items = []
    let totalPages = this.state.currentPage + 2;
      for (let i = this.state.currentPage; i <= totalPages; i++){
        items.push(
          <Pagination.Item onClick={() => this.handlePageChange(i)} key={i} active={i === this.state.currentPage}>
            {i + 1}
          </Pagination.Item>
        );
      } 
    return items
  }
  render() {
    return (
      <div>
        {this.state.pokemon ? (
          <div className="container-Pokedex" >
            <div className="row">
            {this.state.pokemon.map(
              (pokemon) =>
                pokemon.name.includes(this.props.pokeName) && (
                  <PokemonCard
                    key={pokemon.name}
                    name={pokemon.name}
                    url={pokemon.url}
                  />
                )
              )}
              </div>
            <div>
              <Pagination>
                <Pagination.Prev onClick={() => this.handlePreviousPage()} />
                {
                  this.renderPageNumbers()
                }
                <Pagination.Next onClick={() => this.handleNextPage()} />
                </Pagination>
            </div>
            </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}
