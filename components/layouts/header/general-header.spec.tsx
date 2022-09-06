import {render, screen} from '@testing-library/react'
import GeneralHeader from "dh-marvel/components/layouts/header/general-header.component";
import {AppBarProps} from "@mui/material";

jest.mock('@mui/material/AppBar', () => (props: AppBarProps) => {
    return <div><h3>AppBar</h3>
        <div>{props.children}</div>
    </div>;
});

describe('GeneralHeader', () => {
    describe('when rendering general layout', () => {
        it('should render the app name', () => {
            render(<GeneralHeader variant={"general"}/>)
            const appName = screen.getByText('DH-Marvel')
            expect(appName).toBeInTheDocument()
        })
        it('should render the FAQs', () => {
            render(<GeneralHeader variant={"general"}/>)
            const faqLink = screen.getByRole('link', {name: 'FAQ'})
            expect(faqLink).toBeInTheDocument()
        })
        it('should render the material appbar', () => {
            render(<GeneralHeader variant={"general"}/>)
            const appbar = screen.getByText('AppBar')
            expect(appbar).toBeInTheDocument()
        })
    })
    describe('when rendering simple layout', () => {
        it('should render the app name', () => {
            render(<GeneralHeader variant={"simple"}/>)
            const appName = screen.getByText('DH-Marvel')
            expect(appName).toBeInTheDocument()
        })
        it('should NOT render the FAQs', () => {
            render(<GeneralHeader variant={"simple"}/>)
            const faqLink = screen.queryByRole('link', {name: 'FAQ'})
            expect(faqLink).not.toBeInTheDocument()
        })
        it('should NOT render the material appbar', () => {
            render(<GeneralHeader variant={"simple"}/>)
            const appbar = screen.queryByText('AppBar')
            expect(appbar).not.toBeInTheDocument()
        })
    })
})