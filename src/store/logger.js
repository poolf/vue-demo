const logger = {
  state: {
    logs: []
  },
  add(log) {
    this.state.logs.unshift(log)
  },
  remove(log) {
    this.state.logs.remove(log)
  },
  clear() {
    this.state.logs = []
  }
}

export default logger
