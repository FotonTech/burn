describe("Flux", () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it("should play entire game", async () => {
    //Start adventure
    await element(by.id("StartAdventureButton")).tap()

    //Answer 10 questions
    await element(by.id("AnswerButton")).tap()
    await element(by.id("AnswerButton")).tap()
    await element(by.id("AnswerButton")).tap()
    await element(by.id("AnswerButton")).tap()
    await element(by.id("AnswerButton")).tap()
    await element(by.id("AnswerButton")).tap()
    await element(by.id("AnswerButton")).tap()
    await element(by.id("AnswerButton")).tap()
    await element(by.id("AnswerButton")).tap()
    await element(by.id("AnswerButton")).tap()

    //Play Again
    await element(by.id("PlayAgainButton")).tap()
  })
})
