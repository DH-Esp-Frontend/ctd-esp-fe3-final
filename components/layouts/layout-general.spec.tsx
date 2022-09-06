import {render, screen} from '@testing-library/react'
import LayoutGeneral from "dh-marvel/components/layouts/layout-general";

jest.mock('dh-marvel/components/layouts/header/general-header.component', () => () => {
    return <div>Header</div>;
});
jest.mock('dh-marvel/components/layouts/footer/general-footer.component', () => () => {
    return <div>Footer</div>;
});

describe('LayoutGeneral', () => {
    describe('when rendering default', () => {
        it('should render the children', () => {
            render(<LayoutGeneral><p>children</p></LayoutGeneral>)
            const children = screen.getByText('children')
            expect(children).toBeInTheDocument()
        })
        it('should render the header', () => {
            render(<LayoutGeneral><p>children</p></LayoutGeneral>)
            const header = screen.getByText('Header')
            expect(header).toBeInTheDocument()
        })
        it('should render the footer', () => {
            render(<LayoutGeneral><p>children</p></LayoutGeneral>)
            const footer = screen.getByText('Footer')
            expect(footer).toBeInTheDocument()
        })
    })
})