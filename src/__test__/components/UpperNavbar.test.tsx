import UpperNavbar from "@/components/shared-components/Navbar/UpperNavbar";
import { render, screen } from "@testing-library/react";


describe('<UpperNavbar/>', () => {
    test("should UpperNavbar component render properly and USD text and flag img should be in the document" , () => {
        render(<UpperNavbar/>)
        const USD = screen.getByText('USD')
        const flag = screen.getByTestId('flag')
        expect(USD).toBeInTheDocument();
        expect(flag).toBeInTheDocument();
    })
    test("there should be 4 Link tag" , () => {
        render(<UpperNavbar/>)
        const linkList = screen.getAllByRole('link');
        expect(linkList).toHaveLength(4);
    })
})