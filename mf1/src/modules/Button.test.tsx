import { render } from '@testing-library/react'
import MyButton from './Button'

describe('Button component', () => {
    it('should render a button', () => {
        const { queryByText } = render(
            <MyButton />
        )

        const button = queryByText('MF Button')
        expect(button).not.toBeNull()
    })
})