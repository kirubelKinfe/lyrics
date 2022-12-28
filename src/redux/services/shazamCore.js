import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '1a8413d022msha8bd89139a47059p1dfc74jsnafda74114ef6')
            return headers
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world'}),
        getSongsByGenre: builder.query({query: (genre) => `/charts/genre-world?genre_code=${genre}`}),
        getSongDetails: builder.query({query: ({ songid }) => `/tracks/details?track_id=${songid}`}),
        getSongRelated: builder.query({query: ({ songid }) => `/tracks/related?track_id=${songid}`}),
        getArtistDetails: builder.query({query: (artistId) => `/artists/details?artist_id=${artistId}`}),
        getSongsByCountry: builder.query({query: (contryCode) => `/charts/country?country_code=${contryCode}`}),
        getSongsBySearch: builder.query({query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`}),
    }) 
})   

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsByGenreQuery,
    useGetSongsBySearchQuery,
} = shazamCoreApi