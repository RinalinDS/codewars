function createSecretHolder(secret) {
  return {
    _secret: secret,
    getSecret () {return  this._secret} ,
    setSecret (value) {this._secret = value}
  }
}