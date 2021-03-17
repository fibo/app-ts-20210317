import Movie, { MovieProps } from './Movie'

interface MoviesProps {
    movies?: MovieProps[]
}

export default function Movies({ movies = [] }: MoviesProps) {
    return (
        <div>
            {
                movies.map((movie, i) => {
                    <Movie key={i} {...movie} />
                })
            }
        </div>
    )
}
