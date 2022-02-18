import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';

export default function chatPage() {

  const [mensagem, setMensagem] = React.useState('')
  const [listaChat, setListaChat] = React.useState([])

  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      id: listaChat.length + 1 ,
      from: 'barbxrx',
      texto: novaMensagem,

    }
    setListaChat([
      ...listaChat,
      mensagem
    ])
    setMensagem('')
  }

  return (


    < Box
      styleSheet={{
        display: 'flex', alingItems: 'center', justifyContent: 'center',
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(https://thumbs.dreamstime.com/b/abstract-technology-background-artificial-intelligence-science-background-big-data-digital-background-abstract-technology-146508851.jpg)`,
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlenMode: 'multiply',
        color: appConfig.theme.colors.neutrals['000']
      }
      }
    >
      <Box
        styleSheet={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          boorderRadius: '5px',
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: '100%',
          maxWidth: '95%',
          maxHeight: '95vh',
          padding: '32px',
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: 'relative',
            display: 'flex',
            flex: 1,
            height: '80%',
            backgroundColor: appConfig.theme.colors.neutrals[900],
            flexDirection: 'column',
            boorderRadius: '5px',
            padding: '16px',
          }}
        >
          {/* coloquei aqui assim para ver se esta mudando o valor > ta mudando o valor {mensagem} */}
          <MessageList />
          {/* {listaChat.map((mensagemAtual) => {
            return (
              <li key={mensagemAtual.id}>
                {mensagemAtual.from}: {mensagemAtual.texto}
              </li>
            )
          })} */}
          <Box
            as='form'
            styleSheet={{
              display: 'flex',
              alingItems: 'center',
            }}
          >
            <TextField
              // no value vc colocar o valor e aonde sera guardado
              value={mensagem}
              // no onChange vc colocar o setState para alterar o valor insiro pelo usuario
              onChange={(event) => {
                const valor = event.target.value
                setMensagem(valor);
              }}
              // para saber qual tecla esta apertando
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  handleNovaMensagem(mensagem);

                }
              }}
              placeholder='Insira sua mensagem aqui...'
              type='textarea'
              styleSheet={{
                width: '100%',
                border: '0',
                resize: 'none',
                borderRadius: '5px',
                padding: '6px 8px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: '12px',
                color: appConfig.theme.colors.neutrals[200],

              }}
            >

            </TextField>

          </Box>

        </Box>
      </Box>
    </Box >
  )
}
function Header() {
  return (
    <>
      <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alingItems: 'center', justifyContent: 'space-between' }}>
        <Text variant='heading5'>
          Chat
        </Text>
        <Button
          variant='tertiary'
          colorVariant='neutral'
          label='logout'
          href='/'
        />
      </Box>
    </>
  )
}
function MessageList() {
  console.log(props.listaChat)
  return (
    <Box
      tag='u1'
      styleSheet={{
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        color: appConfig.theme.colors.neutrals['000'],
        marginBottom: '16px',
      }}
    >
      <Text
        tag='11'
        styleSheet={{
          borderRadius: '5px',
          padding: '6px',
          marginBottom: '12px',
          hover: {
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }
        }}
      >
        <Box
          styleSheet={{
            marginBottom: '8px',
          }}
        >
          <Image
            styleSheet={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              display: 'inline-block',
              marginRight: '8px',
            }}
            src={'https://github.com/barbxrx.png'}
          />
          <Text tag='strong'>
            barbxrx
          </Text>
          <Text
            styleSheet={{
              fontSize: '10px',
              marginLeft: '1px',
              color: appConfig.theme.colors.neutrals[300],
            }}
            tag='span'
          >
            {(new Date().toLocaleDateString())}
          </Text>

        </Box>
        Mensagem

      </Text>

    </Box>
  )
}