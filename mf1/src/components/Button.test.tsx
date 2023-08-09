import { render } from '@testing-library/react'
import { MyButton } from './Button'

describe('Button component', () => {
    it('should render a button', () => {
        const text = 'MF Button'
        const { queryByText } = render(
            <MyButton>{text}</MyButton>
        )

        const button = queryByText(text)
        expect(button).not.toBeNull()
    })
})