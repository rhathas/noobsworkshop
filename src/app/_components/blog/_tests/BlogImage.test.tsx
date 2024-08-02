import React from "react"
import { render } from "@testing-library/react"
import { BlogImage } from "../BlogImage"

describe("Testing the BlogImage component", () => {
  test("It should render BlogImage without crashing", () => {
    render(<BlogImage src="path/to/image" alt="Test Image" />)
  })

  test("It should render the image with the correct sources and alt", () => {
    const { getByAltText } = render(<BlogImage src="path/to/image" alt="Test Image" />)

    const image = getByAltText("Test Image") as HTMLImageElement
    expect(image.src).toContain("path/to/image")
  })
})
