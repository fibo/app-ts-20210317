interface Director {
    name: string;
    oscar: boolean;
}

export interface MovieProps {
    title: string;
    year: number;
    description?: string;
    director?: Director;
}

export default function Movie({ director, title, year }: MovieProps) {
    return (
        <div>
            <h1>{title}</h1>
            <sub>{year}</sub>
            <p>{director?.name}</p>
        </div>
    )
}
