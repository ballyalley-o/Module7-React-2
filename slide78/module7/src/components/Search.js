import React from 'react'
import { Container, Grid, TextField } from '@mui/material'
import SearchList from './SearchList'

const searchBar = (WrappedComponent) => {
    return class extends React.Component {
        state = {
            searchKey: "",
    }
    handleSearch =(event) => {
        this.setState({ searchKey: event.target.value })
    }

    render() {
        let { searchKey } = this.state
        return (
            <div>
                <Container>
                    <Grid container spacing={1}>
                        <Grid item xs={10}>
                            <TextField
                            sx={{ width:"100%" }}
                            onChange={this.handleSearch}
                            value={searchKey}
                            type='text'
                            placeholder='Search your favorite Character here'
                            />
                        </Grid>
                    </Grid>
                </Container>
                <WrappedComponent searchKey={searchKey} />
            </div>
        )}
    }}

const SearchPopList = searchBar(SearchList)

const Search = () => {
    return (
        <div className='App'>
            <SearchPopList />
        </div>
)}


export default Search