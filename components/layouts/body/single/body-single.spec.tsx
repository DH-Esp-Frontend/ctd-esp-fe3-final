import { render, screen } from '@testing-library/react'
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";

describe('BodySingle', () => {
    describe('when rendering default layout', () => {
        it('should render the children', () => {
            render(<BodySingle><p>children</p></BodySingle>)
            const children = screen.getByText('children')
            expect(children).toBeInTheDocument()
        })
    })
    describe('when rendering with title', () => {
        it('should render the children & the title', () => {
            render(<BodySingle title={'title'}><p>children</p></BodySingle>)
            const children = screen.getByText('children')
            expect(children).toBeInTheDocument()

            const title = screen.getByText('title')
            expect(title).toBeInTheDocument()
        })
    })
})