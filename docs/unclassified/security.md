# defend && attack 

## ip layer
 * ping flood


## security algorithm
#### md5 
#### salting


## three approach
* Encryption
* Authentication
* Integrity

## 信息的处理方式
* 签名
* 加密

## 非对称加密
#### Chain of Trust 
![trust chain](./assets/ea8e7fb6c96bce4a62ab11458890ad2a.svg)
* Alice和Bob建立信任关系
* Alice与Charlie的信任关系是建立在Charlie发送给Alice的消息中包含Bob的私钥加密过的Charlie的公钥，然后Alice可以获取Charlie的公钥用于解密Charlie发送的信息
* 通过这种信任关系的传递，就可以建立一个链式的网络结构
#### 使用方式
* 用于加密解密的时候，使用公钥加密，使用私钥解密(这样才能保证信息不被别人知道)
* 用于认证的时候，使用私钥加密(这样才能肯定是你在加密)，公钥解密
* 但是原则上，私钥和公钥是可以互相加密的时候，但是在使用的时候，我们只在特定的场景使用某个加密方向

#### 算法
* RSA: 基于极其困难的大整数的分解（两个素数的乘积）, RSA 即可作为数字签名，也可以作为加密算法。不过作为加密使用的 RSA 有着随密钥长度增加，性能急剧下降的问题。
* DSA: 基于整数有限域离散对数难题, 只能用于数字签名，而无法用于加密
* 商业角度来看，RSA显然是赢家，商业RSA证书比DSA证书被更广泛地部署。

#### 密钥生成
* OpenSSH是SSH协议的开源版本, OpenSSH提供了实现SSH协议的很多工具。其中ssh-keygen用于生成，管理和转换用于认证的密钥和证书。OpenSSL 是一个强大的安全套接字层密码库，包括了加密算法，常用密钥和证书管理，SSL协议等功能。
* 格式: ASN.1 => DER <>=> Base64 = PEM
* 不同的软件可以对协议做出扩展，但是只要能够提供互相转换的能力，就提供了通用的加解密能力
* 只要是公布出去的，肯定是公钥
* 不管是ssh远程连接，还是github，都是用~/.ssh/id_rsa中的私钥，因为这个文件是默认的私钥加密文件

#### 工具
* 使用ssh-keygen
```
> ssh-keygen -t rsa -C "comments"
> Enter file in which to save the key(指定需要生成文件的目录与文件名)
> passphrase(设置口令，可以为空)
> ls 
ssh  ssh.pub
-------------------------------------------------------------------------------------------------------------------------------------------------
私钥数据:

-----BEGIN RSA PRIVATE KEY-----
Proc-Type: 4,ENCRYPTED
DEK-Info: AES-128-CBC,059F7C4D706FD6D2DECA4E55271326EE

JUrg6VlSjBeqRpZfWKM1EV0l7rtPWj0+zuJ77WXfn0JzRcg9QRUfyqq3854tK9WU
ZBldQ/qdrn1ZdOGtz6sn6Oex5Sfl1qHi1Q21SDluFqVtr6kSl3MBOdbWwCUpRvMB
5ZV8BuI0I4L5Q67FTfIvXqbSyv6E73pM1ciVvKT8r9Lp+bqIAlGciLmtsJdO9Fkm
It8mKKVXRU4qQVxhm5dQWJ063s2Ucfh+Tyuh2S39Xl6caRgaLWmBKxiLqumyrq5X
9wMY9edTtpOajRt3yapn/v4l5Q4DtvUNHxgtoGTIpGgpxRC3f3sPrlV6VTBu4zKQ
TGIcBGTSi1I0/bWwT9qMJDadib38rnwNkdubWwmk/D4m2gO9Rm/1U6xc7ALJj9y4
5PsBiyTkvGGzgdfgwJHZDyFRLwL2pNv6RUYIIZ+JF4vUg96IsTMbnbmrkXhT1YM9
BvyrvOLgUrgaO7qddVHY8J6wFe0N1sKy/deDM7Il7xnNygFStVahGeWvi2aEugoO
bqEaLOnW0TiF8I2g2YCt4yCkW/vac8mShgjHSHrnj0Pekec0wQGJJL6dwJ5BRYxr
sSCNXgTPjMVr64oYtUAiJtY2/HItlzZ2Phh+cyvL6ia3GkJf69Pj+4J2uv9D/msg
76DAd/5Wx+VREU2OM0H/fMyj0U9gFtxjIEVuM4VyhxZzF17Wg7DZ5JPAGBnSqPJk
MXSqywLFNtdMc5k0tvO2gorQnaT+kVoZqo0o72zttXQthPk3etbXPWEyhc4I24Py
5IBObmg5gkZNkbI0/PhI52iqy1beK5dpwYt2hwXdsfY2o7GuMXYvW9t9+yyft6P2
JCjEo+OEUiM81IO0uyhAiPZ0fsxuo84UUOaD0xmVSHgSB0bd4VdBYqLy73FCSLm9
gh0uYc9bUIRY9W9B2frl2wwINuey4GjsnSqDgbV8XWpT9UzLFYBog5DvE+nMSZvh
oErJ6G9vmkI8qNwG7WO0q7vOZ8o/A0GECUCmCIois90lvTpkGmgxm96Wna4loL+a
V1A/1RtwO4SJ294e7Ep4+9r0D7KV9GOxLU5zL+qgVjrITS9VbtnEqe2X+NI28gS2
HoUvmAx80Re2n56+ifJiOTagh9k3PiXd/FfwGOw2Igh7WoHpAsmgjU3cSGCr2ZlL
lDPp+47QmN5gaXfu+9d9jiOTqq8tltXYqCtdOS8rIrcXHlpSatT9zVi4WTpszwkC
LSaKj1hFfBNjL4IEVS8R9QX3+V/bMpHmgVEEhQfdyCezKr2A691Vv2LpGgXN5ZGC
4+L8InP+0v1a/vVcOtyCZWPoPt+GsNP+WJ8vxHolfafgiQxdopH8ZTHqFu+w5OIB
yOIQb20okEGGeq31g1jJGzaKgtirw0bYexf5e7NwG+vtdH+lVKkZhhbb7IIYMHQI
hNP5IvbNFvNMFDRX6J+ze2TLdaqo3Aj1QAcTC9oH9Or2XfP9+5goyp9JL2rNj8Iv
KDhY9NttUWMPracPGRTqvioMZEduEOMXY5S4vUeAMrfteUa9OzbvS6ppsQ9S7MHC
xRaWGDIbi8G+Z6qS4QVeZsR4ZwJfkyGx2IneVY2jKypISdAlGcpX93gEAO7rXc78
-----END RSA PRIVATE KEY-----
-------------------------------------------------------------------------------------------------------------------------------------------------
公钥数据:
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDV8Y+fBEw17S2LabANAJMC5legyJedAZwFDwKCJ3tjFVz6G1fDp2IoC1SaPw9KvAKC3e/7Wx6LsoAQH2srncOSqoyMROu4t7e0/t+6U8ZmSMzrxMTGCXYRBgqULrENnM9BrDfEsaN/++i0PqkwrpHktI+1nkzYZNLtJ057SiL8PSs+KCNj9WNyEb+KOU/LK/11DyvAXzQa5eO+otSJpDvFoLzIfIFSACtbfxIW8tD3/4auRL4WHz/s0q3y2b6ePLtf1X4wywj7XDCoILtklGn3uEtE5vFXVimsSK6W6Rm4KzHNQiukqVgDbKJ+4vsWKhli6mSEkzj8IcwOaZ+DW0Wv testing usage of ssh-keygen
```
* 使用openssl
```
> openssl
>> genrsa -out rsa_private_key.pem 1024
>> rsa -in rsa_private_key.pem -pubout -out rsa_public_key.pem
> openssl req -new -key rsa_private_key.pem -out testing.csr，按照提示一次填入. 根证书是认证中心机构（Certificate Authority）给自己签发的证书，签发者就是自身，是信任链的起点。
-------------------------------------------------------------------------------------------------------------------------------------------------
生成RSA私钥。位长度为2048，保持到rsakey0.pem文件中。
> openssl genrsa -out rsakey0.pem 2048

生成RSA密钥对。使用DES3加密，密钥使用密码保护，位长度为1024
> openssl genrsa -des3 -out rootca.key -passout pass:123456 1024

生成RSA密钥，位长度为2048，格式为DER(二进制格式)
> openssl genpkey -algorithm RSA -out rsapriKey.pem -pkeyopt rsa_keygen_bits:2048 -outform DER

请求时生成新的密钥对(直接生成一对)
> openssl req -x509  -days 365 -newkey rsa:2048 -keyout private.pem -out public.pem -nodes
....
-------------------------------------------------------------------------------------------------------------------------------------------------
> ls 
rsa_private_key.pem  rsa_public_key.pem  testing.csr
注意为.pem文件格式
-------------------------------------------------------------------------------------------------------------------------------------------------
-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQDFOVWEyuB1x8KQphlb812h0Lak9FXy7LK3YhDLF6prDuRyU8sx
ql3w6HiV9eONqhcU3G3YvxT4+Oa/LoLHmGKXPX4hoi2VNDv+eAn9VaHpk0Ot+mXB
eqnTlaujM2acMsrOP5ttv8KSrXxEtyFSBbw1KbqWbEbEwRawtjmetMrdowIDAQAB
AoGBAKyxFFHPdxWKkbIozqG2CjGLWLI9hBjO63opszyx/zX4902oU46sd89fL19X
zCWaXtWUYdbdEhcjkqCqsDbnFsN/tA2xEFokYcyz7pKuRg+IJ/sAzGJ5rQCvJ6sK
4ZoAjCCekB1M+BkYqYLP0Ny+qXpjL4hH7hLBqU3VSe6x5kmxAkEA5JatgVA1TSaz
Y6n//DIrlT1JMtJtVm+H5QLbpooPuG85sKIJ8NZYAg54NOxsGkeVujnEeNZ5RG26
HnRfc1em+QJBANzfz1yaY+2B5fYMFSZl829sew4JaskoIggaqDH5BR0/5yXs6/Xo
ERIslZ4qcFYXtPUXUUy+ZrEgbwR6wp9PxHsCQD/w1f/CC+bU2IEcYHqPHhnU1tDc
g7EV6ZFpxz9Chzs0AZMjAFzZ2CxbF8zWBTckpwE8f3S9qZY2i0VRkBGXhyECQHos
howHjnzC3IvkFRLfU+9vRwX1qY7JV0G6VQ0HXI/YWCh/S+oCyuaNqNkLSoYkqODl
XAAiVbVmZmJI8TykJ98CQQC+EBgNVwMR6bCz7f/wmBq4VfPMyV3tHIv/ZwF+qkDt
Vp2F9CG5FJ1JEf6drF+4gYd4wESlJpddoqMLinQVTAep
-----END RSA PRIVATE KEY-----
-------------------------------------------------------------------------------------------------------------------------------------------------
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDFOVWEyuB1x8KQphlb812h0Lak
9FXy7LK3YhDLF6prDuRyU8sxql3w6HiV9eONqhcU3G3YvxT4+Oa/LoLHmGKXPX4h
oi2VNDv+eAn9VaHpk0Ot+mXBeqnTlaujM2acMsrOP5ttv8KSrXxEtyFSBbw1KbqW
bEbEwRawtjmetMrdowIDAQAB
-----END PUBLIC KEY-----
-------------------------------------------------------------------------------------------------------------------------------------------------
-----BEGIN CERTIFICATE REQUEST-----
MIIB+DCCAWECAQAwgYUxCzAJBgNVBAYTAmNuMRAwDgYDVQQIDAdiZWlqaW5nMQsw
CQYDVQQHDAJiajERMA8GA1UECgwIY2Fwc3RvbmUxETAPBgNVBAsMCGNhcHN0b25l
MRIwEAYDVQQDDAlzYW5kc3RvbmUxHTAbBgkqhkiG9w0BCQEWDnRlc3RpbmdAcXEu
Y29tMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDFOVWEyuB1x8KQphlb812h
0Lak9FXy7LK3YhDLF6prDuRyU8sxql3w6HiV9eONqhcU3G3YvxT4+Oa/LoLHmGKX
PX4hoi2VNDv+eAn9VaHpk0Ot+mXBeqnTlaujM2acMsrOP5ttv8KSrXxEtyFSBbw1
KbqWbEbEwRawtjmetMrdowIDAQABoDIwFwYJKoZIhvcNAQkCMQoMCGNhcHN0b25l
MBcGCSqGSIb3DQEJBzEKDAgxcTJ3M2U0cjANBgkqhkiG9w0BAQsFAAOBgQBe1EKM
HTYwDXgib1HAUIOALNGSL58raBn40rj79qBcXD8WsRwtnxSmuuX88zMV/dBv2WWV
sWt8eoCUQUj1tYpCPlL7H1EPL8KATMWU3mBtB182FV0tGIA1EsZJOmXeya7Uk55J
O5z+LGChgTJ4Fg26Qq2i920//uotucKOjhPzRg==
-----END CERTIFICATE REQUEST-----
-------------------------------------------------------------------------------------------------------------------------------------------------

```
* 两个工具生成的**公钥格式是不同的**,  openssh使用的专属格式([type-name] [base64-encoded-ssh-public-key] [comment])
* 把OpenSSL生成的公钥用于配置SSH连接，验证会失败
* putty生成ppk文件putty private key，puttygen提供了转换能力
#### 使用场景
* github/gitlab: 使用ssh协议生成的公钥，方便在linux下直接提交文件

## 格式
#### DER
* Distinguished Encoding Rules (DER) is a binary serialization of ASN.1 format. It is often used for cryptographic data such as certificates, but has other uses.

#### ASN.1
* ASN.1 是一种接口描述性语言，该语言定义了能够进行跨平台、序列化和反序列化的数据格式；它被广泛的用于电子通讯以及计算机网络中，特别是用在密码学的领域；由此可知，ASN.1 定义了一种专用于密码学领域的一种可以进行序列化和反序列化的数据格式；
比如私钥的数据:
```
Version ::= INTEGER { two-prime(0), multi(1) }
      (CONSTRAINED BY
      {-- version must be multi if otherPrimeInfos present --})

  RSAPrivateKey ::= SEQUENCE {
      version           Version,
      modulus           INTEGER,  -- n
      publicExponent    INTEGER,  -- e
      privateExponent   INTEGER,  -- d
      prime1            INTEGER,  -- p
      prime2            INTEGER,  -- q
      exponent1         INTEGER,  -- d mod (p-1)
      exponent2         INTEGER,  -- d mod (q-1)
      coefficient       INTEGER,  -- (inverse of q) mod p
      otherPrimeInfos   OtherPrimeInfos OPTIONAL
  }
```

#### PEM
* PEM 是明文格式，可以包含证书或者是密钥；其内容通常是以类似 “—–BEGIN …—–” 开头 “—–END …—–” 为结尾的这样的格式进行展示的；后续内容也描述到，PEM 格式的内容是 Base64 格式；通过解码，转换为 DER 格式，也就是说，PEM 是建立在 DER 编码之上的；

#### PCKS
* Public-Key Cryptography Standards Series 公钥加密标准系列


## 对称加密
#### 算法
* AES(Advanced Encryption Standard, 高级加密标准), 所以AES其实是一个标准，算法则是Rijndael, AES256是密钥长度为256bit/32Byte，aes256是目前建议使用的方式
* DES(Data Encryption Standard),是1977年美国联邦信息处理标准（FIPS）中所采用的一种对称加密算法。DES之前一直使用很普遍，但是随着计算机的进步，现在DES已经可以被暴力破解了，除了历史的原因外，我们不再建议使用DES算法。

## reference
* [openssl详解](https://rz1970.github.io/2018/11/11/openssl-vs-openssh.html)