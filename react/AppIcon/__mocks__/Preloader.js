export const preload = jest.fn().mockImplementation(async () => {
  return 'http://cozy.tools/apps/test/icon'
})

export default {
  preload
}
