import * as lib from '.'
import sinon from 'sinon'
import tk from 'timekeeper'
import { DateTime } from 'luxon'

const sandbox = sinon.createSandbox()

describe('getNowString', () => {
  afterEach(() => {
    tk.reset()
    sandbox.restore()
  })

  test('it should return 2018/07/04 15:44:41.331 when zone is UTC', () => {
    sandbox.stub(lib, 'getCurrentTime').returns(DateTime.fromMillis(1530719081331).setZone('UTC'))
    const now = lib.getNowString()

    expect(now).toEqual('2018/07/04 15:44:41.331')
  })

  test('it should return 2018/07/04 15:44:41.331 when zone America/Los_Angeles', () => {
    //2018-07-04T15:44:41.331Z
    //1530719081331

    sandbox
      .stub(lib, 'getCurrentTime')
      .returns(DateTime.fromMillis(1530719081331).setZone('America/Los_Angeles'))
    const now = lib.getNowString()

    expect(now).toEqual('2018/07/04 08:44:41.331')
  })
})
