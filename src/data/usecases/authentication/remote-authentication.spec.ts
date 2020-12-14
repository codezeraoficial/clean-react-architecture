import { HttpPostClientSpy } from '../../test'
import { RemoteAuthentication } from './remote-authentication'

type SutTypes ={
  httpPostClientSpy: HttpPostClientSpy
  sut: RemoteAuthentication
}
const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)

  return {
    httpPostClientSpy,
    sut
  }
}
describe('RemoteAuthentication', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = 'any_url'
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
