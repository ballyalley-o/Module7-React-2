import React, { useState, useEffect, useCallback } from 'react'
import SearchDetails from './SearchDetails'
import Loading from './Loading'
import { Container, Grid, TextField, Button } from '@mui/material'
import axios from 'axios'

const API_URL = process.env.REACT_APP_POST_URL

const SearchList = (props) => {
    const [ posts, setPosts ] = useState([])
    const [ searchContent, setSearchContent ] = useState("")
    const [ errorMessage, setErrorMessage ] = useState("")
    const [ isLoading, setIsLoading ] = useState(false)
    const { searchKey } = props

    const filterSearches = (searchKey) => {
        searchKey = searchKey.toUpperCase()
        return posts.filter((post) => {
            let str = `${post.name}`.toUpperCase()
            return str.indexOf(searchKey) >= 0
        })
    }

    const getSearches = useCallback(async () => {
        try {
            setIsLoading(true)
            const response = await axios({
                method: "GET",
                url: API_URL,
            })

            if (response.status === 200) {
                setTimeout(() => {
                    setPosts(response.data)
                    setIsLoading(false)
                }, 3000)
            } else {
                console.log(response)
                setIsLoading(false)
            }
        } catch (err) {
            console.log(err)
            setIsLoading(false)
            setErrorMessage('Not Found What you are looking for')
        }
        }, [])

        const handleCreateSearches = async () => {
            try {
                setIsLoading(true)
                const response = await axios({
                    method: 'GET', //used GET instead of POST, because the API doesn't support POST requests
                    url: `${API_URL}`,
                    data: {
                        nickname: "Your Name",
                        name: searchContent,
                        status: "Alive"
                    },
                })

                if (200 <= response.status && response.status < 300) {
                    setIsLoading(false)
                    alert('Character added successfully')
                } else {
                    setIsLoading(false)
                    alert('Error while adding character')
                    console.log(response)
                }
            } catch (err) {
                console.log(err)
                setIsLoading(false)
                setErrorMessage('Unable to add character')
            }}

        const filteredSearches = filterSearches(searchKey)

        useEffect(() => {
            getSearches()
        }, [getSearches])

        const renderSearches = (
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <TextField
                        xs={{ width: '50%' }}
                        id='searchContent'
                        placeholder="Your Name Here"
                        onChange={(e) => setSearchContent(e.target.value)}
                        />
                    </Grid>
                    <br />
                    <Grid item xs={2}>
                        <Button
                        variant='contained'
                        xs={{ margin: "10px" }}
                        onClick={handleCreateSearches}
                        >{" "}Add Yourself{" "} </Button>
                    </Grid>
                </Grid>
                {filteredSearches?.map((post) => (
                    <SearchDetails {...post} />
                ))}
            </Container>
        )

  return (
    <div>
        {isLoading ? <Loading /> : renderSearches}
        {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  )
}

export default SearchList