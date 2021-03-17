import React, {useEffect, useRef, useState} from "react";

export interface CarouselProps {
    numPages: number;
}
interface CarouselState {
    currentPage: number;
}

export class Carousel extends React.Component<CarouselProps, CarouselState> {

    static defaultProps: CarouselProps = {
        numPages: 1
    }

    state = {
        currentPage: 1
    }

    componentDidUpdate(prevProps: Readonly<CarouselProps>, prevState: Readonly<CarouselState>) {
        if (prevProps.numPages > this.props.numPages) {
            this.setState({ currentPage: 2 })
        }
    }

    render() {
        return(
        <div>Carousel</div>
        );
    }
}


const Carousel2 = (props: CarouselProps) => {

    const [currentPage, setCurrentPage] = useState(0);
    const prevNumPage = useRef<CarouselProps['numPages']>();

    useEffect(() => {
        if(typeof prevNumPage.current === 'number' && prevNumPage.current > props.numPages) {
            setCurrentPage(2);
        }
        prevNumPage.current = props.numPages;
    }, [props.numPages])

    return(
        <div>Carousel</div>
    );
}