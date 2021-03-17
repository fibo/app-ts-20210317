export interface MovieProps {
    title: string;
    year: number;
    description?: string;
    director: string;
}

export default function Movie({ director, title, year }: MovieProps) {
    return (
        <div>
            <h1>{title}</h1>
            <sub>{year}</sub>
            <p>{director}</p>
        </div>
    )
}
