import React from 'react';
import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import { useRouter } from 'next/router'

import appConfig from '../config.json'

function Title(props) {
  // console.log(props);
  const Tag = props.tag;
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
      ${Tag} {
        color: ${appConfig.theme.colors.neutrals[500]};
        font-size: 24px;
        font-weight: 600;
          }
    `}</style>
    </>
  )
}

export default function PaginaInicial() {
  // const username = 'barbxrx';
  const [username, setUsername] = React.useState('barbxrx');
  const roteamento = useRouter();

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'left',
          // backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage: 'url(https://wallpaperbat.com/img/397100-figures-squares-ball-network-line-background-hd-wallpaper.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '60px', padding: '32px', margin: '16px',
            boxShadow: '5px 5px 10px rgba(0,0,0,0)',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',

          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit= { function (infosDoEvento) {
              infosDoEvento.preventDefault();
              console.log('ALguem submeteu o form')
              //hook utilizado para nao ficar dando reload toda vez que entrar na proxima pag
              roteamento.push('/chat')
              // window.location.href= '/chat'
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Title tag="h2">Entre para bater um papo sobre tecnologia!</Title>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[500] }}>
              {appConfig.name}
            </Text>

            {/* <input
              type="text"
            /> */}

            <TextField
              onChange={function Handler(event) {
                // onde ta o valor?
                const valor = event.target.value;
                // trocar o valor da variavel
                setUsername(valor);
              }}
              valeu={username}
              fullWidth
              placeholder = 'user do github'
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[888],
                  backgroundColor: appConfig.theme.colors.neutrals[100],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[888],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary['000'],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.primary[888],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[400],
              borderRadius: '20px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[400],
                backgroundColor: appConfig.theme.colors.neutrals[100],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}