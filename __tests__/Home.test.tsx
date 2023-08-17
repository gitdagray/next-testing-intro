import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
    it('should have Docs text', () => {
        render(<Home />) // ARRANGE 

        const myElem = screen.getByText('Docs') // ACT 

        expect(myElem).toBeInTheDocument() // ASSERT
    })

    it('should contain the text "information"', () => {
        render(<Home />) // ARRANGE 

        const myElem = screen.getByText(/information/i) // ACT 

        expect(myElem).toBeInTheDocument() // ASSERT
    })

    it('should have a heading', () => {
        render(<Home />) // ARRANGE 

        const myElem = screen.getByRole('heading', {
            name: 'Learn'
        }) // ACT 

        expect(myElem).toBeInTheDocument() // ASSERT
    })
})
