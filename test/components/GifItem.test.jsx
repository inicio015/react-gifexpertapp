import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe(' Pruebas en el componente gifitem',() => {
    const title = "SAITAMA";
    const url = "https://one-punch.com/saitama.jpg";
    test('Probando este componente de GifItem y debe hacer match con el snapshot',() => {
        const {container} = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();


    })
})