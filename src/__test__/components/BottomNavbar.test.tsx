import BottomNavbar from "@/components/shared-components/Navbar/BottomNavbar";
import { render, screen } from "@testing-library/react";


describe('<BottomNavbar/>', () => {
    test("should BottomNavbar component render properly and logo name should be Elite Mart" , () => {
        render(<BottomNavbar/>)
        const logoName = screen.getByText(/^Elite Mart$/);
        expect(logoName).toBeInTheDocument();
    })
    test("there should be 5 Link tag" , () => {
        render(<BottomNavbar/>)
        const navLinks = screen.getAllByTestId('main-nav-link');
        expect(navLinks).toHaveLength(5);
    })
})