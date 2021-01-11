import React, { Component } from 'react'

import styles from './Homepage.module.css'
import Card from './../../components/Card/Card'
import Auxiliary from './../../hoc/Auxiliary/Auxiliary'

class Homepage extends Component {

  descriptionSection = () => {
    const data = [
      {topic: 'NICKNAME', value: 'Jamie', hoverLine: true},
      {topic: 'FULLNAME', value: 'Sathira Kittisukmongkol', hoverLine: true},
      {topic: 'AGE', value: '23 years old', hoverLine: true},
      {topic: 'STATUS', value: 'Fullstack Developer', hoverLine: true},
      {topic: 'UNIVERSITY', value: 'Kasetsart University', hoverLine: true},
      {topic: 'DEFINITION', value: 'Passionate to improve himself in every dimension of life. Intended to use programming skills help other people and organization.', hoverLine: false},
    ]
    return (
      <Auxiliary>
        <div className={`${styles['card-label']}`}>
          <span>SHORT DESCRIPTION</span>
        </div>
        <Card>
          <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 lg:w-1/3 flex justify-center items-center'>
              <img 
              className='rounded-3xl w-64'
              src='https://avatars2.githubusercontent.com/u/25222819?s=460&u=a09c540f082dd3a02466a259e56151f9d7ba3183&v=4'
              />
            </div>
            <div className='w-full mt-6 md:w-1/2 lg:w-2/3 lg:mt-0'>
              {data.map(item => {
                return (
                  <div key={item.topic}>
                    <span><b>{item.topic} :</b></span>
                    <span className='ml-2'>{item.value}</span>
                    {item.hoverLine ? <hr className='my-3'/> : null}
                  </div>
                )
              })}
            </div>
          </div>
        </Card>
      </Auxiliary>
    )
  }

  programmingLanguages = () => {
    const data = [
      {name: 'Javascript', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'},
      {name: 'Java', imgUrl: 'https://www.makingdifferent.com/wp-content/uploads/2015/10/java-logo.png'},
      {name: 'Python', imgUrl: 'https://qph.fs.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc'},
    ]
    return (
      <Auxiliary>
        <div className={`${styles['card-label']}`}>
          <span>PROGRAMMING LANGUAGES</span>
        </div>
        <Card>
          <div className='flex flex-wrap'>
            {data.map(item => {
              return (
                <div className='text-center w-1/3 lg:w-1/4 my-3'>
                  <img src={item.imgUrl} className='w-16 lg:w-24 h-16 lg:h-24 mb-1 rounded mx-auto'/>
                  <span className='text-sm'>{item.name}</span>
                </div>
              )
            })}
          </div>
        </Card>
      </Auxiliary>
    )
  }

  frontendSection = () => {
    const data = [
      {name: 'Reactjs', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZGhCCOsR9ZWD1VE6lVEzSHKE0BipFMuC0NpfLu3Q9yQjTRENA&usqp=CAU'},
      {name: 'Vuejs', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png'},
    ]
    return (
      <Auxiliary>
        <div className={`${styles['card-label']}`}>
          <span>FRONTEND TECHNOLOGIES</span>
        </div>
        <Card>
          <div className='flex flex-wrap'>
            {data.map(item => {
              return (
                <div className='text-center w-1/3 my-3'>
                  <img src={item.imgUrl} className='w-16 lg:w-24 h-16 lg:h-24 mb-1 rounded mx-auto'/>
                  <span className='text-sm'>{item.name}</span>
                </div>
              )
            })}
          </div>
        </Card>
      </Auxiliary>
    )
  }
  
  backendSection = () => {
    const data = [
      {name: 'Nodejs', imgUrl: 'https://img.icons8.com/color/452/nodejs.png'},
      {name: 'Firebase', imgUrl: 'https://img.icons8.com/color/452/firebase.png'}    
    ]
    return (
      <Auxiliary>
        <div className={`${styles['card-label']}`}>
          <span>BACKEND TECHNOLOGIES</span>
        </div>
        <Card>
          <div className='flex flex-wrap'>
            {data.map(item => {
              return (
                <div className='text-center w-1/3 my-3'>
                  <img src={item.imgUrl} className='w-16 lg:w-24 h-16 lg:h-24 mb-1 rounded mx-auto'/>
                  <span className='text-sm'>{item.name}</span>
                </div>
              )
            })}
          </div>
        </Card>
      </Auxiliary>
    )
  }

  databaseSection = () => {
    const data = [
      {name: 'MySQL', imgUrl: 'https://f0.pngfuel.com/png/747/798/mysql-logo-png-clip-art.png'},
      {name: 'MongoDB', imgUrl: 'data:image/png;base64,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'},
    ]
    return (
      <Auxiliary>
        <div className={`${styles['card-label']}`}>
          <span>DATABASES</span>
        </div>
        <Card>
          <div className='flex flex-wrap'>
            {data.map(item => {
              return (
                <div className='text-center w-1/3 lg:w-1/4 my-3'>
                  <img src={item.imgUrl} className='w-16 lg:w-24 h-16 lg:h-24 mb-1 rounded mx-auto'/>
                  <span className='text-sm'>{item.name}</span>
                </div>
              )
            })}
          </div>
        </Card>
      </Auxiliary>
    )
  }

  otherToolsSection = () => {
    const data = [
      {name: 'VSCode', imgUrl: 'https://user-images.githubusercontent.com/674621/71187801-14e60a80-2280-11ea-94c9-e56576f76baf.png'},
      {name: 'Git', imgUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'},
      {name: 'Source', imgUrl: 'https://pbs.twimg.com/profile_images/907270522492383232/8wgOvccc_400x400.jpg'},
      {name: 'Fork', imgUrl: 'data:image/jpeg;base64,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'},
      {name: 'Trello', imgUrl: 'https://qph.fs.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc'},
      {name: 'Asana', imgUrl: 'data:image/jpeg;base64,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'},
      {name: 'Vuesax', imgUrl: 'https://lusaxweb.github.io/vuesax/vuesax-logo-beta.png'},
      {name: 'TailwindCSS', imgUrl: 'https://www.drupal.org/files/styles/grid-3-2x/public/project-images/screenshot_361.png?itok=w4CzcWyb'},
      {name: 'Buefy', imgUrl: 'https://res.cloudinary.com/vuejsprojects/image/upload/c_scale,f_auto,q_auto,w_auto/v1/post/buefy.jpg'},
      {name: 'BulmaCSS', imgUrl: 'data:image/jpeg;base64,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'},
      {name: 'Postman', imgUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAkFBMVEX9bDX////9aC79ajL9ZSf9Zyv9aS/9YBv9YyP9YiD9ZSj+n4D/+/n9bjX9dkb+pon/8Ov+z8D/9PD+wa3/6uP9ekn/8ez9l3b9f1L+vaj/49r9hl39jmj9imP+tp/+3tP+1cj+rZL+x7b9cj3+zL39kW/9mnj+1MX+sJb9XRL+uaT9g1f+oYb+waz9fEz9imY1b2mbAAAQBElEQVR4nN2da5eiuhKGJTcugqJiq4iC0toXe7r//787AbxAAgiSEPZ5v8xZe52e5pkkVZVKpTLS+tV83vMvHMn+Bbbrh7PNdBzsJlRxHCd/rHfB9LCJQt+V/etlAs7d8N/0dJmMkIEwJgTmRADGyLSc5fZ0OPquLe8rJAHa4WZ8iXUDAwJH1UpJDT3e/vzzJUHKAAy/A6wjXItW5CQY6eT0HUr4GNGA3jHQTUSaouUpATLN09ET/EFCAf39BSLwAtxdAMHL3hf5TeIAvcWOvDR0jOhfsluIG0dBgPbHyjEE0F0ZDWf1IcjoCAGc75c6aGxSmggCfbIXEhMIAAzPOhJKd2VE+kqAWe0MGG0tLJ4uE8DbqOtM7QgYBbiT1Xwmgrfv3RA7AUZ/hlS8FNG4RIoA/UCXjpci6kGHtfgyoHvuBy8R0E8vO8YXAe09kmZaShHR54tO4zXAaI36xEtkrGe9AbpjLCxoaS5inV/ZHr8AOHOs/vESYeeFQWwNOF99SQhbmgnqqzfZgLO4V+PCCsdtB7El4AErG75MEE/bRTatAN2doRYvkbFt5RPbAEZqp+dNwPmQA7g3FU/Pm6D+KQHQXvXu26uFgsYLsSmgu1Xk/MplNV6IDQH95SCW30P4t+EOoxlg6PS2c2gqEDfbJjYCnBkDMS95QaORz28CeBwiHyU0F2IAN6ZqlCoZGxGAmwG5B1boOeFTwI2MnKcoweeEzwAXA4g+62Q8W4dPAGeDXX83mU9saT1gNEz7mRc06j1+LWAYD56PEjq154l1gO7v4OKXMoFlXTKqBtDeDiz+rBLe1uwtagCDQewf0ooTDGrzlNbqFcD9ABw8xKazO/8cxqstrjtARvv2gB/qHQS04nF0LRKyvUVAqk2CWZnFqAL0HOUGFIwOResRBpVRFYyrDE0FoL1VbkDLsmezyn92vGsHOFUeoZUnlsLKeWUc2gDOlDsIo5TPW5LKcx9cHrOVAr4pj2Cs0vFwY0wWu4rFA+PSE8RSwJXqAQRBKd8EoKP2VmVpcKk3LAOc6f3icCoPLynf11Gr2cF9lU3SEkBXuYcwyvy2F+MrwbZiGUKnxFeUAJ5VT1DolKwmb4KtY/Y/P6piLGvcBHCmPATF05JpRe3LlU+z11VTDPEBDQc4Xys4fy/K5FO6dP3dxo9qWjXHyJrbV3CAn8pd/OirjO/rwadFlXEyH3WzgK76PQRcsx/pxeBmIaPkT9ep/GHE2hkWULkLpE7wzPI97Ev4pVPC+W+lncfsDzOAvmoXOOJtDLUv4DY/fYhP1Mrsqu2EzrhQBjBQvongAN3H+FFtwYQCBtWAbBBUBIwGMIAMIGNf/nBMp+ilxtLrxTRiAdCu+8HeBPIx5XyJUS4Cc2NwoZuBSU2sBf6qAd/Vu4hRsi3QCkROrrppjJMTJa/WEhoFN5oHtKuCvJ6l5yO1aIQnj639CE3mzwaiuArzgJF6F5HKeNcKX4V/74SbXRKMrepNIc4PYR5wIANYXISJ78OTgvt265Zg8vPbcsBwIANIg9FiuinEuLARenoka+UMaQ7wycBLFwSWYVjJDRo2HKHrMEdoP02o5H/+AThX6wOBsV7tZ7P9Kqbjg5ltT8HSVO4lHsqZqQeg0lQ9HgXR9aO8A4aEPTCKwN3SNAlGcpuKO6C9VJeoIOY5H0H6vxDn7UQiamky6EYpd7i87wvvgB/KZig0t3m8+WZFraS1Y7auoYWT9LzvNDL1+n2O3wGVmRjsFOoIFo5hIIQhXjOZ+9TSzJrx5TzNDVDVYQtEqwLI1LCc8/dmvLRAfCwOYhSDCWz4ldDxGEBF5SKE/CtAHAwrSD/tbWxBtJvlEefnFpcw7+UlN8A/JVEMjovb04NujG9MY0yNz/LwkRlX7zgmbQIRsisC+kr49HFxEk5185HZTM06tMwvFMexrhst4yziFwC/FThBgpkqpalh5DO337cELWy68vK6ucIroIKdLpgw6c8pQoXMdNjpEP2Wm8sAPVFf3Vx4zQQrB6PI1xFwNPJygMf+b8utGEee2Jfif1l0+yh0zAGe+vby3AH1IW9fMnXcnl439hlgzyUj0DwyMIx9SbTpegikPwDDfuNQQtjTFda+JKumRbuWcpnhHbBfJwEmbAEkjc+48TPxpTpB30jo+w7Y6xLMpZDu64+bnwfTuvjbboAkuAHaXSdDG6Ede3xbYl9OprGzva5fhe0rYJ8nLpx7KLEv81+c/KfO8X+axE8Ae9xJGFypB29fvAlOqxA6ZzHTkvwE8Ke3fCFf38PblzDGVhKk+p1/Gx5ngP1l7Pl6Mt6+zAjIzuinnYshyGWeAvZWuPXF3XHg7cvexNlG56178JHWWI56szHwiw1ftKnJjh+dsdcgvEH286kSKzPq69AMkneOj7Uv9hkZp8yLCCmGMP6lgIc+bAwccYVknH1xT8j8uXqRsYiPSs6KR/3EMZCv5uTsi7u27lYoEjKrwCkF7MGIQsyG17x98RG+F+HZYsqtyMWmgK78nD3EXPk1Z19mOiD3UZ6Kif7hxKWAvvSUL4m58k/OviwQju+bjA9Ri8bxKaD0c08Sc/fDOPvyaeHlfZTtJye4zYVCClhd2SZGxOH4DjozfmfDujw2GeLKyYwZBZR8R5cQbn6y9sXeIjO3yViICzxouD2is0PY31ciwNfCT80iH9095HNQYjxEJuoIR0Jiourf8MuVUXP5XcqXC1LdpUCvRfcTI6n1d4A95Ev4ivblw8E4F6TafyL/vUFAAWtKE7sKLjk+1r4cqXvIVxyMhS4YsqOAF2luEMIRG2Cz9mX/hSd5I7QXa9LhLwUU5nRYgXUMUHELOGX4ziba5o3Q+5fYT4ATiYB4+UbtY359JfYlX+IzD6xiDioU7bFkAqZFBP4So/ccX8G+uBds/OTH0xeeWpAICLL0rj8Bd0LGvngxLl4C8JbC7XkCOJeSkQHx1X565EZI7Ut+foYI6IUchr0W75BhPJcDmItfXAekFQ+MfTnqABdiVFtG1ygY21KmKM6XmmWWholf6O4hLvhI+yQjYpS0BpkiJX9NyAoX7MsPQsUryJK6tskBBMXjI3v+iUcA/+RpTHQqxuBnOZk9KYAgV0NuR9+rWE8WV65kxL4gnU2HStqypYAdjxn5vzMbm3l4HMdfJkrLrzAm5s0l+DH+Yu6IjWVlZuFFfLCN3zTbnx0uDkH3XqRo7FF/mFHR3YPFFQAJ/YKc0mBbMCCcrtaOYeXPVBP74i+BmZxmvWOuU+9BXmY93S4JySHnhNmawMx+0piGEi5MzJ7Qy2y6IH9HT3XLf3oxxAGy2BN6qU0lrE/5Sacbn+1Tb0EI2xhUmn1JlSadZlJ/BRhrmdEZAQtgSHqzL6nMKEn8Sh1B8PlNjY5pIBP/ng6/AOX3+PZYcoEOThK/3c/C638HQqYVr8dH/624e0oiGsknkzBN3T+76tRFxEIGOW2ie+ztOTnCk+wCK7hMDl9saVknjHef74zRdAm41jnagfQCMrKVegDK1WdlY0h3T4mlmV/kt5S4HoBKcoRlnTMSZXmat10PLTPwIQX8J2WpV/GllgZv+uBLr5KOJFWLls/P6yyNodVL7VHSNGCUXHQWb2W4+sGC5MYWd8H4LQWsvXb/murGL9lRiP595SJJU8ekGE/0fqJm/SXa9/VmRZomSQBFh9u1fDQ866v8Nk1XJoCCrUzt/Jz3+KBR2pgkLWkWOkVr7Usk9y24giC5lTRrNd1LWqt2/PZ9NkVO4pgr4F6c161bf29SsteVyl0r6HoN6qE6vmjSb6sF/XExRBNlZermZ+9PxpjaA1BQpUWNffEufV8Szpag0Ot1NeO36f85uML1OiEXJKvXn1vdnFeeYP6CpFbZLbC5qvmOKh6kIhctD9i9U0fl/HRPSl4EyJyEuGvmlfZl0fZ+uCAx18y7HsFUjZ+/VdToi20U0PGCVsX6mx9GqlqAcK0eOjXrqOD7+LVU9ajhm3V0abfC3b/N/snOuroWPHy7lQ4Nc8rty2e/D/UyKmmY83LLo1L7cnSUNmIta3n0qissW3/hTtniy1TWtOrFtmMlfN645mGIflTaduyl/tq8fbE/ofIOe/negfnWf+3327x9WTgDeEoMl7f+01o/osHxHZ0hvERFKpo3tm6/yc7P2Vr1M8SZKttvttzYM/YlCtAw2neSwjNMBcBWt2qKfGFgqDadNxX7rxa7NP81/8hCu28/+BoKXnrtsxKweRtqAJ3HTPeUhmWM9OJt2hcbiVvnEXgQDumVwvpG4k2bBtD1Fzn4TuirfwHgLqaPONfMv1E4k/qHyLnXzdc01+9b12xoNWCTDgTX+w8RAvia+FDdHvghxN534x7UeL6puMcvIQIom6UqOgeWin+PigN8ekc/F79QwmwdDuEVh0RkzV2o5R+1qXwTJ1PBv98szVz5S0aZLP7lpZJniWovYTLxJ7U0ILE0vbfWKxX3XEg5YN3DUpjdP0Q4tTQCj1BfV9OHpbRZ9T1Mh/s/h5Qw6tpoUYz0hk+D1bUigJdgPN5soigMPW+eBn2+Q+Kz8ufuRm0ed9NqrtxBgpMaXpOQeLJe//2Nx/sAwhbdhaUpLdxqCNjogUVIRShuP3V1z9XmgUWpt1EkySh5MK0GUNsNaAPURKDqNeUqQBk1lhL1OGxpCjiEh4ZbSG/90PAwnopuKlT65usTQG01hOikkazSN1GfAv7fP9euub+DCKGfCXA9dZsCauF/wZRCvulXY0AtHMJRQ71g8amzloCDSgiWyyyP0JoCqnpJpLEMrilrS0BtM4DzvkrBtE9xN0DZd3w76TlfA0BtM9hZaj7nawKoLfouRm4maHBNg18E1GZD9BbQeGI/WwAmbzqp5mEF+KaXHQC18HdgcSleck0vOwFq3nZQewtrW5IC7QTYx6Xp5kLcmwfdATXtU2F5ZEHQ5B5lFwKofTiDMDXFdpYiAelCHIDPN3ZNl197QM2eqq5lgsndeHmA1OeruOTxEI4befcOgNrbSp2tgV8r7gRXOKCmvTuKBtFi211JAtTcs4oDF4LGraxLB8CkcLJ3c4rWbZxDV0Bt/ol69YkY7RvHLkIAqU886b0hAv38yuzsBpiUiOq9LEWgBw13DoIB6TbxYkhHBMZfs42fDEDNft/KvZwLcFCf15UMmHQQ3crr3gCsbUe87oBU4UqXkTuFSF91mpzCAKnT2E90sZUkEOjLfeuwrExCAOlM/Vg54gwOMZzVx4t+j5UgQCpvsSMibk5ARHaLuhO/dhIHSOV/X2C3CAeg0XrfwevxEgqoJc+qn8xr5+K2IpapB0dxY5dJNGCi8PtEdNTiHV1IMNJxsBdgNDnJANSSnqn/fraxbmBAat9ahxBgQ3cu400oyKiwkgSYyH7zj4fTdulYJrJS0oeSKj5koNHkcpr+C10hDqFcEgGvcv0w2nz+BLv1hCqO4+SPXTCebmah70oat4fkAxY1lzhYpfofUZnyDHE9BycAAAAASUVORK5CYII='},
      {name: 'Reactstrap', imgUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--8nVJEXFD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/t7bts10h3z2024aszrmf.png'},
      {name: 'Bootstrap', imgUrl: 'data:image/png;base64,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'}
    ]
    return (
      <Auxiliary>
        <div className={`${styles['card-label']}`}>
          <span>OTHER TOOLS</span>
        </div>
        <Card>
          <div className='flex flex-wrap'>
            {data.map(item => {
              return (
                <div className='text-center w-1/3 lg:w-1/4 my-3'>
                  <img src={item.imgUrl} className='w-16 lg:w-24 h-16 lg:h-24 mb-1 rounded mx-auto'/>
                  <span className='text-sm'>{item.name}</span>
                </div>
              )
            })}
          </div>
        </Card>
      </Auxiliary>
    )
  }

  render() {
    return (
      <div className='px-12'>
        <div className='my-10'>
          {this.descriptionSection()}
        </div>
        <div className='my-10'>
          {this.programmingLanguages()}
        </div>
        <div className='flex flex-wrap my-10'>
          <div className='w-full lg:w-1/2 md:pr-1'>
            {this.frontendSection()}
          </div>
          <div className='w-full lg:w-1/2 md:pl-1 mt-10 lg:mt-0'>
            {this.backendSection()}
          </div>
        </div>
        <div className='my-10'>
          {this.databaseSection()}
        </div>
        <div className='my-10'>
          {this.otherToolsSection()}
        </div>
      </div>
    )
  }

}

export default Homepage