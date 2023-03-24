const getMessages = ({ messages, setMessages, setButtons, setFormData, formData }: any) => {
  switch (true) {
    case (messages.length === 0):
      setMessages((currValue: any) => ([
        ...currValue,
        {
          type: "bubble",
          text: "Hi, how can I help you?"
        }
      ]));
      setButtons(() => ([
        {
          type: "button",
          text: "Contact the Numero team",
          onClick: () => {
            setButtons([]);
            setMessages((currValue: any) => ([
              ...currValue,
              {
                type: "bubble",
                text: "Contact the Numero team",
                classname: "self-end"
              },
              {
                type: "bubble",
                text: "Got you!"
              },
              {
                type: "bubble",
                text: `Let me fill a contact form for you.\nFirst, can I get your full name please?`
              }
            ]));
            setFormData({ ...formData, toggle: true });
          }
        },
        {
          type: "button",
          text: "???",
          onClick: () => {
            setButtons([]);
            setMessages((currValue: any) => ([
              ...currValue,
              {
                type: "bubble",
                text: "01010101"
              }
            ]));
          }
        }
      ]));
      break;
    case (formData.toggle && formData.name !== ""):
      setMessages((currValue: any) => ([
        ...currValue,
        {
          type: "bubble",
          text: formData.name,
          classname: "self-end"
        },
        {
          type: "bubble",
          text: `Thank you, ${formData.name}. Did I get your name correct?`
        }
      ]));
      setButtons(() => ([
        {
          type: "button",
          text: "Yes",
          onClick: () => {
            setButtons([]);
            setMessages((currValue: any) => ([
              ...currValue,
              {
                type: "bubble",
                text: "Yes",
                classname: "self-end"
              },
            ]))
          }
        },
        {
          type: "button",
          text: "No",
          onClick: () => {
            setButtons([]);
            setMessages((currValue: any) => ([
              ...currValue,
              {
                type: "bubble",
                text: "No",
                classname: "self-end"
              },
              {
                type: "bubble",
                text: "Oh, I'm sorry! Could you please enter your name again?",
              },
            ]));
            setFormData({ ...formData, name: "" });
          }
        },
      ]))
      setFormData({ ...formData, toggle: false });
      break;
    case (formData.toggle && formData.email !== ""):
      setMessages((currValue: any) => ([
        ...currValue,
        {
          type: "bubble",
          text: formData.email,
          classname: "self-end"
        },
        {
          type: "bubble",
          text: "Woah, that's a cool name!"
        },
        {
          type: "bubble",
          text: "What's your email?"
        },
      ]));
      break;
    default:
      return messages;
  }
}

export { getMessages }