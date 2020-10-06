import React from "react";
import Avatar from  '@material-ui/core/Avatar';
import DashbordOfC from "./DashbordOfC";


const menu = [
  {
  title : "C Programming",
  icon : <Avatar alt="C" src="data:image/png;base64,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" />,        
  url : 'C',
  path : '/C',
  items: [
        {
          title: "Set 1",
          set : 'set1',
          to: "/Set-1",        
          exact: true,      
          main : () => <DashbordOfC set='f13ad147-6007-4523-9e1c-67d6b809a219' />
         
        },
        {
          title: "Set 2",
          set : 'set2',
          to: "/Set-2",
          exact: true,      
          main : () => <DashbordOfC  set='1539418c-d89f-4361-8dd0-d64a96fd8ba7' />
        },
        {
          title: "Set 3",
          to: "/Set-3",
          set : 'set3',
          exact: true,      
          main : () => <DashbordOfC  set='3d88c162-beb5-49d7-b75b-adad2e3ec134'/>
        },
        {
          title: "Set 4",
          to: "/Set-4",
          set : 'set4',
          exact: true,      
          main : () => <DashbordOfC  set='41839ccc-2f27-4510-a200-36a9745e9f7a'/>
        },
        {
          title: "Set 5",
          to: "/Set-5",
          set : 'set5',
          exact: true,      
          main : () => <DashbordOfC set='44597689-d8e5-4c7f-91d4-71e1f4d54c95'/>
        },
        {
          title: "Set 6",
          to: "/Set-6",
          set : 'set6',
          exact: true,      
          main : () => <DashbordOfC set='4b1a4cec-523f-493a-986d-136b5a3a0c71'/>
        },
        {
          title: "Set 7",
          to: "/Set-7",
          set : 'set7',
          exact: true,      
          main : () => <DashbordOfC set='4ed67c54-8602-4593-bf16-1cb28927575a'/>
        },
        {
          title: "Set 8",
          to: "/Set-8",
          set : 'set8',
          exact: true,      
          main : () => <DashbordOfC set='51b0f703-b0af-48f0-94e9-59ed0f20ea3e'/>
        },
        {
          title: "Set 9",
          to: "/Set-9",
          set : 'set9',
          exact: true,      
          main : () => <DashbordOfC set='524802b7-1bc3-4b60-8335-1978cbf17cf1'/>
        },
        {
          title: "Set 10",
          to: "/Set-10",
          set : 'set10',
          exact: true,      
          main : () => <DashbordOfC set='5306d90f-632f-4546-be47-1c1d2ee7e271'/>
        },
        {
          title: "Set 11",
          to: "/Set-11",
          set : 'set11',
          exact: true,      
          main : () => <DashbordOfC set='5e839ff0-3f08-455f-801c-4a796d30223f'/>
        },
        {
          title: "Set 12",
          to: "/Set-12",
          set : 'set12',
          exact: true,      
          main : () => <DashbordOfC set='6db3bf76-b9b1-417c-af2c-719987018905'/>
        },
        {
          title: "Set 13",
          to: "/Set-13",
          set : 'set13',
          exact: true,      
          main : () => <DashbordOfC set='785cfe93-4350-49c1-8594-0dd5c068b33d'/>
        },
        {
          title: "Set 14",
          to: "/Set-14",
          set : 'set5',
          exact: true,      
          main : () => <DashbordOfC set='88757ef6-c103-4ebe-8acb-b41c1ee25285'/>
        },
        {
          title: "Set 15",
          to: "/Set-15",
          set : 'set15',
          exact: true,      
          main : () => <DashbordOfC set='88acf9fe-59bb-406b-8149-da5b37f5cd9f'/>
        },
        {
          title: "Set 16",
          to: "/Set-16",
          set : 'set16',
          exact: true,      
          main : () => <DashbordOfC set='953e69e5-26b9-4ea8-804a-c4879712996a'/>
        },
        {
          title: "Set 17",
          to: "/Set-17",
          set : 'set17',
          exact: true,      
          main : () => <DashbordOfC set='9c833cbe-c797-48e1-a956-60d04afcdd3c'/>
        },
        {
          title: "Set 18",
          to: "/Set-18",
          set : 'set18',
          exact: true,      
          main : () => <DashbordOfC set='a431f868-06af-4ef7-b9fb-a2666a93239e'/>
        },
        {
          title: "Set 19",
          to: "/Set-19",
          set : 'set19',
          exact: true,      
          main : () => <DashbordOfC set='ad7d48e6-199e-476a-a38c-3f2a1f9dc900'/>
        },
        {
          title: "Set 20",
          to: "/Set-20",
          set : 'set20',
          exact: true,      
          main : () => <DashbordOfC set='b029aa99-2894-4fd4-96c4-cd27fc13d3d0'/>
        },
        {
          title: "Set 21",
          to: "/Set-21",
          set : 'set21',
          exact: true,      
          main : () => <DashbordOfC set='d7f0911e-a42b-491a-8a38-839a6582c491'/>
        },
        {
          title: "Set 22",
          to: "/Set-22",
          set : 'set22',
          exact: true,      
          main : () => <DashbordOfC set='e0dcd3d8-5fd6-4af3-a168-2e0ca2717604'/>
        },
        {
          title: "Set 23",
          to: "/Set-23",
          set : 'set23',
          exact: true,      
          main : () => <DashbordOfC set='e6737d59-2b66-48c6-b913-b156505ed6bf'/>
        },
        {
          title: "Set 24",
          to: "/Set-24",
          set : 'set24',
          exact: true,      
          main : () => <DashbordOfC set='ecf15655-bc54-4240-94d4-7f4f6fe14979'/>
        },
        {
          title: "Set 25",
          to: "/Set-25",
          set : 'set25',
          exact: true,      
          main : () => <DashbordOfC set='ef206a8c-22ff-4d5a-bddf-0870a4c95454'/>
        },
        
      ],
    
},
{
  title : "C++ Programming",
  icon : <Avatar alt="C++" src="https://i.pinimg.com/originals/99/f8/87/99f887833c475448723d3c9ac16c179b.png" />,        
  url : 'C++',
  path : '/C++',
  items: [
    {
      title: "Set 1",
      to: "/Set-1",
      set : 'set1',
      exact : true,
      main : () => <DashbordOfC set='00a4afa6-4338-4d0b-8ad9-88fa60888753'/>
    },
    {
      title: "Set 2",
      to: "/Set-2",
      set : 'set2',
      exact : true,
      main : () => <DashbordOfC set='08c42c26-c42e-4cd1-8702-fda267a76af1'/>
    },
    {
      title: "Set 3",
      to: "/Set-3",
      set : 'set25',
      exact: true,      
      main : () => <DashbordOfC set='0cbca79e-417f-4ada-80f9-7932739ddd78'/>
    },
    {
      title: "Set 4",
      to: "/Set-4",
       set : 'set25',
          exact: true,      
          main : () => <DashbordOfC set='29cc4a48-83a3-4db0-a2f3-5afd0c65f3a6'/>
    },
    {
      title: "Set 5",
      to: "/Set-5",
       set : 'set25',
          exact: true,      
          main : () => <DashbordOfC set='2b61762b-1863-4e15-a620-fbb1622e98da'/>
    },
    {
      title: "Set 6",
      to: "/Set-6",
       set : 'set25',
          exact: true,      
          main : () => <DashbordOfC set='2c451f04-c89a-4afe-8115-0d1dc674a1f6'/>
    },
    {
      title: "Set 7",
      to: "/Set-7",
       set : 'set25',
          exact: true,      
          main : () => <DashbordOfC set='2e81be89-4b8f-4b43-9009-3ff72c06c97d'/>
    },
    {
      title: "Set 8",
      to: "/Set-8",
       set : 'set25',
          exact: true,      
          main : () => <DashbordOfC set='393e8413-2f67-4e26-9cb4-b19d31eb7e86'/>
    },
    {
      title: "Set 9",
      to: "/Set-9",
       set : 'set25',
          exact: true,      
          main : () => <DashbordOfC set='5b082064-5f1c-406c-bce7-696bacb3d2ed'/>
    },
    {
      title: "Set 10",
      to: "/Set-10",
       set : 'set25',
          exact: true,      
          main : () => <DashbordOfC set='602a5612-9f64-4241-911c-675c89b2ccc7'/>
    },
    {
      title: "Set 11",
      to: "/Set-11",
       set : 'set25',
          exact: true,      
          main : () => <DashbordOfC set='73a147c7-8acb-4f80-86a5-a111e9e5e520'/>
    },
    {
      title: "Set 12",
      to: "/Set-12",
       set : 'set25',
          exact: true,      
          main : () => <DashbordOfC set='90c81970-0b88-46cc-95a0-0812f36f04b6'/>
    },
    {
      title: "Set 13",
      to: "/Set-13",
       set : 'set25',
          exact: true,      
          main : () => <DashbordOfC set='b13a1faf-5103-4d2e-beca-08d49f467432'/>
    },
    {
      title: "Set 14",
      to: "/Set-14",
       set : 'set25',
          exact: true,      
          main : () => <DashbordOfC set='c0084929-8bf8-42d8-824c-f10dbc37f094'/>
    },
    {
      title: "Set 15",
      to: "/Set-15",
       set : 'set25',
          exact: true,      
          main : () => <DashbordOfC set='cd73c6fa-851d-4663-996c-c9024fdb3975'/>
    },
   
    
  ],

},
{
  title : "Java Programming",
  icon : <Avatar alt="C" src="https://firebasestorage.googleapis.com/v0/b/quizzer-68b5a.appspot.com/o/categories%2Fstorage%2Femulated%2F0%2FDCIM%2FScreenshots%2FIMG_20191224_175325.jpg?alt=media&token=3012e119-7d8f-4aeb-accd-c32f93cbf7fa" />,        
  url : 'Java',
  items: [
    {
      title: "Set 1",
      to: "/Set-1",
      set : 'set1',
      exact : true,
      main : () => <DashbordOfC set='0b56b7d5-d5d5-4513-b388-23eb9cd0e8c3'/>
    },
    {
      title: "Set 2",
      to: "/Set-2",
       exact : true,
      main : () => <DashbordOfC set='1dbaecda-4bb6-4c2c-9529-d0ab8c30677a'/>
    },
    {
      title: "Set 3",
      to: "/Set-3",
       exact : true,
      main : () => <DashbordOfC set='3dabb56e-f90c-4e94-9d19-808d38aad5ae'/>
    },
    {
      title: "Set 4",
      to: "/Set-4",
       exact : true,
      main : () => <DashbordOfC set='4e7729b0-f815-434e-a10c-46f82b71606d'/>
    },
    {
      title: "Set 5",
      to: "/Set-5",
       exact : true,
      main : () => <DashbordOfC set='5daa5904-7807-4657-ba5e-761dff176dc5'/>
    },
    {
      title: "Set 6",
      to: "/Set-6",
       exact : true,
      main : () => <DashbordOfC set='60d3ed96-bbc6-46eb-88c3-5a2fb55ed9d8'/>
    },
    {
      title: "Set 7",
      to: "/Set-7",
       exact : true,
      main : () => <DashbordOfC set='62608da5-1779-4f8a-81fd-30d4ce72a044'/>
    },
    {
      title: "Set 8",
      to: "/Set-8",
       exact : true,
      main : () => <DashbordOfC set='905c5f44-9dc2-4b1c-a920-bda654d56226'/>
    },
    {
      title: "Set 9",
      to: "/Set-9",
       exact : true,
      main : () => <DashbordOfC set='b766b59e-7b5b-4d20-bd74-13dd4bd17138'/>
    },
    {
      title: "Set 10",
      to: "/Set-10",
       exact : true,
      main : () => <DashbordOfC set='d0b554d8-6756-41db-86ae-23e5262b8406'/>
    },
    {
      title: "Set 11",
      to: "/Set-11",
       exact : true,
      main : () => <DashbordOfC set='d3335368-cd6d-4d6b-bb50-e607d88252a9'/>
    },
    {
      title: "Set 12",
      to: "/Set-12",
       exact : true,
      main : () => <DashbordOfC set='d4144ccb-3c0b-4e62-8e22-be1b5ab7754b'/>
    },
    {
      title: "Set 13",
      to: "/Set-13",
       exact : true,
      main : () => <DashbordOfC set='decf8f03-73d3-4419-826a-76030c59e379'/>
    },
    {
      title: "Set 14",
      to: "/Set-14",
       exact : true,
      main : () => <DashbordOfC set='f5d4554c-f535-4474-b552-c7c62a0e42a1'/>
    },
    {
      title: "Set 15",
      to: "/Set-15",
       exact : true,
      main : () => <DashbordOfC set='ff3acc1e-616b-4383-84bb-2bb8d1b80adc'/>
    },
     
  ],
  path : '/Java'

},
{
  title : "Python Programming",
  icon : <Avatar alt="C" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAEsASwMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcDBAUCAf/EADUQAAICAQICCAIIBwAAAAAAAAECAAMEBRESQQYHISIxUXGxIzIUQmGBk7LB0RUzRXKRkqH/xAAbAQEAAwEBAQEAAAAAAAAAAAAAAwQFAgYBB//EAC8RAAICAgAEAwcDBQAAAAAAAAABAgMEERIhMVEFEyIUQXGBkbHRFTNSI2Gh4fD/2gAMAwEAAhEDEQA/ALxgCAIAgCAIAgCAIAgCAIAgEZ1vphi6blPiUY9mVfX84U7Kp8t+32lmvGc1xN6RWsyYwfCltnBfrFyQe7p1O3kbSf0k3sS/kQ+2v+JnwusilrVTPwGqQ+NlVnHt9u2w/WcSw2l6WdxzE36lonNF1eRSl1Lq9bqGVlO4IPOVGtPTLae1tGSfD6IAgCAIAgFa4+fqOia/qmRTpN+St1rqPhuPrEgg7Hs95oShCyuKctaM6Mp12SajvZE86jMQvfk4d1KuxJLUsignkNxLMZR6JleUZdWjnu06OS5Or52fojgFjvsHA9A7ATKyP3WatH7aJFISYQBAEA4fS/WX0bTOOjb6Rc3BXuPl8zJ6KvMnp9CC+3y47XUrC/V9Rtcu+flFj4/GYexmkq4JdEZjsm/ezWfVdQ5Z+X+O37x5cOy+h98yfd/U1cnPy704L8vItTffhstZhv6Ez6oxXRByk+TZoO0+nwtjoUSvRbT9yR3X/O08f45bKGT6W1yN3BinStkhwryt4QklW7Nt+creHZk3b5c3tPoT3VLh4kdSbxVEAQCv+tCxhfp6fV4bD9+6y/hdJfIoZvWPzIE7y6UjsaR0Uz9UpXIL141D/K1u5LDzAHKUcnxGjGepvmWqcSy1bXQ326vcg/1TH/CaU/1zF7/f8Fj9Os7nmrq8YWqcjVEavfvCqo8R9N/D/s4s8exox2ubPsfDbG+bJpRVVi49ePjpwVVqFRfICeRy8qWTa7JGzVUq4qKPdTfHr/uHvIsabWRDXdfc7nH0MkM9oZggCAQzrNwXu0ujMrUt9Gc8e3JW5/5AlvEnqbj3KmXDcFLsVlWBZfXW3yu4U+hM0JPSbKEVtpFzcK191AFUdgA5CfnWXNyvm5dz1FaSikjwzSo5EiRjZpG5HaRjZpE5HaRkwKzdl1jkp4j90veF0u7JT90ef4/yRZEuGt/3JDPYGYIAgHl0WxGR1DKw2II3BEA4h6H6AbRb/DawwbiHCzAA+gO0l8+zWtkXkV73oWt329TPFZUv68/i/ua1a9KMXGAdyAfsMrwsUZba38f9EjjtH0sTWbBjKUB2Ld7b3lnzNwdioXD39X5OOHnw8fP5G9hYuPk44seoAkkdhP7zXw8PGvojZKtbfx7/ABK1ttkJuKZvUY9VAIqQLv4zTporpXDXHSIJTlJ7kzLJTkQBAEAQDk5mDaLGeleJSd9h4iYGf4ZZKbsp579xcpvilqRoNVdv/Ks/1MxZ4uQnp1y+jLSsr7o2aK82yg0KnDWx8WG200sajPnT7Prhi/e+v/fIgsnSp8fVnXxaRj0LWDvt4nznoqKY01xrj0RSnJzk5MyyU5EAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEA//9k=" />,        
  url : 'Python',
  items: [
    {
      title: "Set 1",
      to: "/Set-1",
      exact: true,      
      main : () => <DashbordOfC set='04875995-88ed-4668-b3fe-9b28403f5a12'/>
     
    },
    {
      title: "Set 2",
      to: "/Set-2",
      exact: true,      
      main : () => <DashbordOfC set='0e2ce5a9-a468-46fe-9808-53aa7658f472'/>
    },
    {
      title: "Set 3",
      to: "/Set-3",
      exact: true,      
      main : () => <DashbordOfC set='1b3b4fbf-35a3-4f0a-888b-26c3d6be5699'/>
    },
    {
      title: "Set 4",
      to: "/Set-4",
      exact: true,      
      main : () => <DashbordOfC set='36e8c3c2-cf20-4edf-b911-66b7e8ad14f3'/>
    },
    {
      title: "Set 5",
      to: "/Set-5",
      exact: true,      
      main : () => <DashbordOfC set='536f12cc-e61d-4ff4-af5a-970887b59be9'/>
    },
    {
      title: "Set 6",
      to: "/Set-6",
      exact: true,      
      main : () => <DashbordOfC set='65eaf2cd-585f-4383-984c-0dc26b40ae3f'/>
    },
    {
      title: "Set 7",
      to: "/Set-7",
      exact: true,      
      main : () => <DashbordOfC set='70782ef3-2f75-4d20-bfd7-cae8b7e1ebaa'/>
    },
    {
      title: "Set 8",
      to: "/Set-8",
      exact: true,      
      main : () => <DashbordOfC set='85d5998b-93d7-4474-8025-8b2c341fb912'/>
    },
    {
      title: "Set 9",
      to: "/Set-9",
      exact: true,      
      main : () => <DashbordOfC set='8931f667-3961-4015-a2fb-ce4a526e7564'/>
    },
    {
      title: "Set 10",
      to: "/Set-10",
      exact: true,      
      main : () => <DashbordOfC set='9def4716-f8a3-4537-800b-4705fd9b0d5d'/>
    },
    {
      title: "Set 11",
      to: "/Set-11",
      exact: true,      
      main : () => <DashbordOfC set='b5e3004e-c47d-4ea2-8b21-7b27cf21c422'/>
    },
    {
      title: "Set 12",
      to: "/Set-12",
      exact: true,      
      main : () => <DashbordOfC set='e3fc67f4-5e3a-4b24-afcc-5ffad703ef94'/>
    },
    {
      title: "Set 13",
      to: "/Set-13",
      exact: true,      
      main : () => <DashbordOfC set='eec370fb-3bee-4004-92a4-50f2e62cccef'/>
    },
    {
      title: "Set 14",
      to: "/Set-14",
      exact: true,      
      main : () => <DashbordOfC set='f8009657-b1f8-4ecd-93b4-f13c9e47a153'/>
    },
    {
      title: "Set 15",
      to: "/Set-15",
      exact: true,      
      main : () => <DashbordOfC set='f95e08ba-c22d-4c54-82d2-a501c3b58c32'/>
    },
    
  ],
  path : '/Python'

},
{
  title : "Android Programming",
  icon : <Avatar alt="C" src="https://cdn.vox-cdn.com/thumbor/kL-Z76ZSmU6AUOBanezRDqSQ7us=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19086219/Android_logo_stacked__RGB_.jpg" />,        
  url : 'Android',
  items: [
    {
      title: "Set 1",
      to: "/Set-1",
       exact: true,      
      main : () => <DashbordOfC set='1213692a-9d69-476c-8ad2-e5bdf8921836'/>
    },
    {
      title: "Set 2",
      to: "/Set-2",
       exact: true,      
      main : () => <DashbordOfC set='220b7d59-b057-4636-8f02-2b742550d15a'/>
    },
    {
      title: "Set 3",
      to: "/Set-3",
       exact: true,      
      main : () => <DashbordOfC set='430ac588-4f91-471f-a620-d862a03de5b2'/>
    },
    {
      title: "Set 4",
      to: "/Set-4",
       exact: true,      
      main : () => <DashbordOfC set='5750d455-e894-49f9-a8d1-bb97dd0e4e6b'/>
    },
    {
      title: "Set 5",
      to: "/Set-5",
       exact: true,      
      main : () => <DashbordOfC set='60e8fe92-5c7f-4ab1-ba72-824ee03ccb9a'/>
    },
    {
      title: "Set 6",
      to: "/Set-6",
       exact: true,      
      main : () => <DashbordOfC set='64b38447-f555-4205-b8c0-a003883c608f'/>
    },
    {
      title: "Set 7",
      to: "/Set-7",
       exact: true,      
      main : () => <DashbordOfC set='69ade6c3-31cb-46dc-9ff8-6ae7dc4adfbe'/>
    },
    {
      title: "Set 8",
      to: "/Set-8",
       exact: true,      
      main : () => <DashbordOfC set='6bcd7fef-c09c-4884-9910-9921cef5305d'/>
    },
    {
      title: "Set 9",
      to: "/Set-9",
       exact: true,      
      main : () => <DashbordOfC set='74f08672-d85c-4dc9-b2aa-c4b424d49482'/>
    },
    {
      title: "Set 10",
      to: "/Set-10",
      exact: true,      
      main : () => <DashbordOfC set='f18da175-68ae-4355-86a0-ff1afebc51d2'/>
    },
    
  ],
  path : '/Android'

},
{
  title : "Php Programming",
  icon : <Avatar alt="C" src="https://firebasestorage.googleapis.com/v0/b/quizzer-68b5a.appspot.com/o/categories%2Fstorage%2Femulated%2F0%2FDCIM%2FScreenshots%2FIMG_20191224_175620.jpg?alt=media&token=d48cfe1d-46d0-42b8-a5d1-ae5046953f0b" />,        
  url : 'Php',
  items: [
    {
      title: "Set 1",
      to: "/Set-1",
       exact: true,      
      main : () => <DashbordOfC set='080e81f0-c768-4a45-86cc-2b6305f88eea'/>
    },
    {
      title: "Set 2",
      to: "/Set-2",
       exact: true,      
      main : () => <DashbordOfC set='17883d0f-03ba-41e9-be99-4435416b0071'/>
    },
    {
      title: "Set 3",
      to: "/Set-3",
       exact: true,      
      main : () => <DashbordOfC set='1a538936-51af-437f-a274-b34147b1ebf4'/>
    },
    {
      title: "Set 4",
      to: "/Set-4",
       exact: true,      
      main : () => <DashbordOfC set='34d82679-a589-4f71-9a86-cfb7b6715b15'/>
    },
    {
      title: "Set 5",
      to: "/Set-5",
       exact: true,      
      main : () => <DashbordOfC set='45935aea-25d8-42ea-92f9-e6a2ce05dd88'/>
    },
    {
      title: "Set 6",
      to: "/Set-6",
       exact: true,      
      main : () => <DashbordOfC set='4d6fc2ec-2ce9-4e5a-bfde-a3cb480727d6'/>
    },
    {
      title: "Set 7",
      to: "/Set-7",
       exact: true,      
      main : () => <DashbordOfC set='57f82da0-4341-4c10-a4cd-f87d79407e03'/>
    },
    {
      title: "Set 8",
      to: "/Set-8",
       exact: true,      
      main : () => <DashbordOfC set='691a932d-73f3-4f5c-b29a-8cee36cee8a5'/>
    },
    {
      title: "Set 9",
      to: "/Set-9",
       exact: true,      
      main : () => <DashbordOfC set='9e60f2d8-931c-46c0-b440-b2fb3839426b'/>
    },
    {
      title: "Set 10",
      to: "/Set-10",
       exact: true,      
      main : () => <DashbordOfC set='d0cc740e-4c0f-4668-80a4-dd4bca923bda'/>
    },
    {
      title: "Set 11",
      to: "/Set-11",
       exact: true,      
      main : () => <DashbordOfC set='d93866f6-5c4c-4004-87b2-6f3c5e3b9999'/>
    },
    {
      title: "Set 12",
      to: "/Set-12",
       exact: true,      
      main : () => <DashbordOfC set='da905f99-bed6-47df-a88b-83638bda2c7f'/>
    },
    {
      title: "Set 13",
      to: "/Set-13",
       exact: true,      
      main : () => <DashbordOfC set='e3158f48-3f5e-47e4-8b6f-4bd5ff58a54e'/>
    },
    {
      title: "Set 14",
      to: "/Set-14",
       exact: true,      
      main : () => <DashbordOfC set='f1991dd7-da83-44db-9cc9-dbb0da4c1ea4'/>
    },
    {
      title: "Set 15",
      to: "/Set-15",
       exact: true,      
      main : () => <DashbordOfC set='fda497b8-e2c1-44bc-aafe-a617cb1c9d29'/>
    },
    
  ],
  path : '/Php'

},
{
  title : "Html",
  icon : <Avatar alt="C" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrUsZ1cigMUOKUxCm1pGs8PDPv3fhBbQh-l1u6Qm5DCi921jg5i29CHjlpqJrEqLVnrGAX4zogmtwYq6uw5yD6Ij8nT-oiU_HErg&usqp=CAU&ec=45699844" />,        
  url : 'Html',
  items: [
    {
      title: "Set 1",
      to: "/Set-1",
       exact: true,      
      main : () => <DashbordOfC set='02e3587d-81fb-4000-bd09-dfdf6d18163e'/>
    },
    {
      title: "Set 2",
      to: "/Set-2",
       exact: true,      
      main : () => <DashbordOfC set='0683b913-cacb-4cd7-9f36-27ddc719e537'/>
    },
    {
      title: "Set 3",
      to: "/Set-3",
       exact: true,      
      main : () => <DashbordOfC set='164bfd6e-2cf7-4475-86c5-fc024a96b21b'/>
    },
    {
      title: "Set 4",
      to: "/Set-4",
       exact: true,      
      main : () => <DashbordOfC set='17d37318-562a-4533-b199-c09f15f7c086'/>
    },
    {
      title: "Set 5",
      to: "/Set-5",
       exact: true,      
      main : () => <DashbordOfC set='27cddfe2-35fc-4915-935a-d978418ea3bf'/>
    },
    {
      title: "Set 6",
      to: "/Set-6",
       exact: true,      
      main : () => <DashbordOfC set='4d2211b4-3daa-4c8d-a81f-0caa704ebe88'/>
    },
    {
      title: "Set 7",
      to: "/Set-7",
       exact: true,      
      main : () => <DashbordOfC set='645ddd53-6a61-499c-8ad6-2c511619888b'/>
    },
    {
      title: "Set 8",
      to: "/Set-8",
       exact: true,      
      main : () => <DashbordOfC set='68a6a373-752d-4621-9e9b-c4b61361eddd'/>
    },
    {
      title: "Set 9",
      to: "/Set-9",
       exact: true,      
      main : () => <DashbordOfC set='6bb64ef4-94e5-43ac-82bf-afe481766e04'/>
    },
    {
      title: "Set 10",
      to: "/Set-10",
       exact: true,      
      main : () => <DashbordOfC set='741798d2-2560-420f-b601-4dcab0b17869'/>
    },
    {
      title: "Set 11",
      to: "/Set-11",
       exact: true,      
      main : () => <DashbordOfC set='878fde2e-43ea-402f-800e-15068a777939'/>
    },
    {
      title: "Set 12",
      to: "/Set-12",
       exact: true,      
      main : () => <DashbordOfC set='896c2c4e-cdf4-43eb-b15a-7f18d38985f9'/>
    },
    {
      title: "Set 13",
      to: "/Set-13",
       exact: true,      
      main : () => <DashbordOfC set='8bdf5b0b-3f3c-45e5-be43-8e0a8d76994b'/>
    },
    {
      title: "Set 14",
      to: "/Set-14",
       exact: true,      
      main : () => <DashbordOfC set='e26b5520-5123-418a-bb27-35d78dca58d7'/>
    },
    {
      title: "Set 15",
      to: "/Set-15",
       exact: true,      
      main : () => <DashbordOfC set='e5d8f678-b5ed-417b-a67f-8b77ebea18d4'/>
    },
        
  ],
  path : '/HTML'

},
{
  title : "Css Programming",
  icon : <Avatar alt="C" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACACAMAAAAbIvrHAAAAilBMVEX+/v4acrkbh8f///8Aa7fN3e0AYrMAe8LJ2+sAaLWwyeMAgcWHuNwAZbQAbLYUcLh8stqYttn0+Pvp8Pd8pdHZ5vJjlspLiMMbfL+5z+bi6/Sevd3R4vAbd72PsteIrtVipdQ7gL9ZjcVwmstSm881j8u71+uZw+JAlMxwqtatz+gzerwAWrCkyOSqm0BvAAAHxElEQVR4nO2bbZuiOgyG0VYEFTqC6IigwzjjvHDm//+9A8tbSdMUdHS/bD/ttcuSm6Z9kibVsv76YH/d/j8CQMAeM/QELJo9YkRMT7Dx+P2HtyEIDu7k/sNdEwQL7wEE3oIgcB5C4BAEkf0IAmolxo9YB35MEUzE3QHEhCII8wcQZAFBEGTjCcTQ0Ty/IwleHzAHrwSBxbajCdLp0LGsCc5EXChk2R/9TWMJ/A1JcLonQTW//EgSrPnd58A9kARXBIbBBM/V896eJNjfk6Dygj0jCZLxgWEwQVo9b8ckQXhPgnoOApIguCNB9bjwLZLA8kdL0liC3EAwPjSNJdhZFkFgWTA0+bZheHN6LCHBlpEEMDD4p1vPBqsGoZZEIMoqwbkvy+LVum2wJ0hwNBCAwADXze0E/GAgAIFB+MFvEdSSyBcGggUITXb0awTVC7ljINgDAhBHbiCoJdFNDAQOyNeh224gqF7oxgaCCBAU2/GXCQIDQQgIoIBcT9AsbfA+hcCCBLvbNoNCkBoILAZDUxr+LsHOSPDcJxAiHl6RIQlqSYReVQl2MDQdF/pxODikecaSt35ggmEBIdjCfN13dcN2t05A2Q+/P9vIWGfKfG0kGHpmEXxyiggvMBav3rvQ3IiyuzASHAedGISXHgLKPLu8SKlBJ8ou1FiVYDGgiMGL6dd/Pis/fzkHGVI9B/7MSLA3EQg3P8XU5weXl+VyCkcVFsQERjqVwKHXgfCzQ0jZDz8+EfuNKIs0NhIkQp+rCt/e7fXuLzffF2q+Cws5FDiVINKWkoQrNvrVX/xD+PMOvd+N+h0ZFHmVQFdKEi41/YX3k6ep5vNlAijKCEGAEvhit6CmP/h+I+3rcnW0v4AUs7i9TajdF62m8yU6IIEiyggBg8WsQnzWxOovZu3j6WmlGS1CU75QEh6EAAQGkRLT30yCNnDOIYGS9CEEMDDk16coLG4J8AIKTnDqi6KqYiMIktYLdabsQVHGCGCXw3euJ7hAAq58DkIAS0lKPB1B8N0RVBMqoChjBDNAwK/P19lHS9AsKiXrRAiUE8P1+Xp3dG/mQBFljCAGoUnk1xN8gTlAcn+EIEwBgWtMiLXjRRFllRIhyPtemNjXnhiY1SaqTfnirLwKIQhgvu5dux1Z8A4kEVnVCIEFewx8MapwJBO0TmiKB+pJHImN7AzPLJuZM3xIS40FUJQRbcEIlBODoLrIPojHkuQgYeEyiOA0rscAMhFp2TKnJWhqyskggpHt7z7Ap+yFCxAkbFthBCO7HH2CN+mF7AcScDXSYwQjuxx9ghd5L6ygJE6GEajtb19eeSTB8kkmeIIEmaosGIHS5eCndTdOMJHtE6xkAkWUlVwdJwjgXrAjSXBCeKLpEcx/5Pe11Yu6gIKVxVACeG6TdzELYTbfJ3BkQerCQu1NJVdHCSwLhib52obamu4TJDIsDAuwrq4jUEpJPTWH9X9AIAtS3P71M15X1xLA0NSrqyqi3V+JsiBF7VZoAhNSpEYJoI1eVGcHThC8ywQJJHCROI8SwFJSbwkrgtUjeJPfo4QFroYFnAB+ZS+7YwlF8CWzfncEtReQbAslgF0OkcnrK/yvX/jtLYOeJH7ATBlr2KAEsMsBsvz9JheSOHfmC4OyICmiPIFVbS3BDNbXwf0dxuL9WdhuNRd/jM/T5dvqkvRvmLwMCAs4QQTnwFVKcKU8LzaZ7fl8vvz8+iiSM6XOzRRRRsICThBCAvXEW1EEBcUiCgK8xs4+AQF6+kIJ1MCgaXeRFX45V683I3YCRQkYODUhlY8Bg4VTQIC+Bo1MDIY/F4koZoKoJWhEGasD4ARKaEKiqplgBgl8zJk4AexyXNVwUwsoSl1dT7BRZHn08bnsMAACvCKFEyiBIXc0O05nnYWXr06sdXV1PYHS5RB+vi02/hCI8pm4rPEq9VSkgKIlUAJDyeCK3ekSWDREoVLxh1Jibnw5nADvcgjBPX97iHT+KP8+WWH9jfr/o/c5cAJ9l0MI1+bnRaxQlBp9+VrOsQL7khBlDYG+y1E5xJ9kJydsKco/xJeXqa69orkDQxEopSTEIW6+PcRVRLTCH735aVfCQZUVJxh2YVa4XrbZlysPnftuPBNhQUNgQVnWO8SzDeanRF1dS6B2OYgx4KZsc/sCE2UdATwXUcNkf1lPAVJXJwjGXNk1mW+n00croxqC44hSEmE9ncjCotbVCYIxxSyN+cJ6X1XwsKAjGFNKQsw/p8hz4La4gQDeixpBsEwx8xO0rk4QKCeGYQTQ872Bi7KOIPaGbwbp46m2vbDxbpHuV2X7c+7zYbLUep66NcDFbo1lSFqCMtbODrv/PPPV3bSTHI15brvnfaw92GjmoAq51v6U2a4BQlAfLzz3dZ1QOSb9275yKuLDNvc44WG9ddfNzvvQlNeRBPVUhLNTNuGj7lIXnp9kx1lozrAH/b6xfE202HoDVkVt3vOK1HpYfj/4F5bl62brV26iKOd+d5wNP12M+o1nmY/tN5mvW5tF7sbz88Lk+RsIqpkIkvVr6qtTIbjITkM8fxNBQ1FMRVpsU9FZ9/grksPfh6ChKLZp+mebCo/vjo51hfUbCGqKYHbcicLz8bXmbyOoIaLRnv9NggrixhfcSnDz+Efwh+Bvj/8B91eWYpUKiuAAAAAASUVORK5CYII=" />,        
  url : 'Css',
  items: [
    {
      title: "Set 1",
      to: "/Set-1",
      exact: true,      
      main : () => <DashbordOfC set='0278d394-2f9f-4179-b2e8-059302926f27'/>
    },
    {
      title: "Set 2",
      to: "/Set-2",
       exact: true,      
      main : () => <DashbordOfC set='030c2cb6-bedc-42fe-aa92-44936e247c27'/>
    },
    {
      title: "Set 3",
      to: "/Set-3",
       exact: true,      
      main : () => <DashbordOfC set='063d85b4-ab93-4cb2-95ca-ee63d5092dbb'/>
    },
    {
      title: "Set 4",
      to: "/Set-4",
       exact: true,      
      main : () => <DashbordOfC set='1f888f70-1e34-4bf2-a0db-22f384fcceae'/>
    },
    {
      title: "Set 5",
      to: "/Set-5",
       exact: true,      
      main : () => <DashbordOfC set='47d2bba1-7835-4ea0-995f-f397decefc7c'/>
    },
    {
      title: "Set 6",
      to: "/Set-6",
       exact: true,      
      main : () => <DashbordOfC set='5c267ff8-a29f-492f-b406-1b61b4c39eea'/>
    },
    {
      title: "Set 7",
      to: "/Set-7",
       exact: true,      
      main : () => <DashbordOfC set='7ef3a807-bd3f-4baf-9b81-1483bb1f2e61'/>
    },
    {
      title: "Set 8",
      to: "/Set-8",
       exact: true,      
      main : () => <DashbordOfC set='87187220-2524-46d7-a10c-4654249c31ee'/>
    },
    {
      title: "Set 9",
      to: "/Set-9",
       exact: true,      
      main : () => <DashbordOfC set='8edb8e5d-e6f5-4827-b251-536308669947'/>
    },
    {
      title: "Set 10",
      to: "/Set-10",
       exact: true,      
      main : () => <DashbordOfC set='a2023005-312f-41ac-996c-d8538caa019d'/>
    },
    {
      title: "Set 11",
      to: "/Set-11",
       exact: true,      
      main : () => <DashbordOfC set='ae42fc85-8082-4d95-8be7-5a0da0dbfc48'/>
    },
    {
      title: "Set 12",
      to: "/Set-12",
       exact: true,      
      main : () => <DashbordOfC set='d42e95b3-e6d8-46c8-beb1-1afd128fbe79'/>
    },
    {
      title: "Set 13",
      to: "/Set-13",
       exact: true,      
      main : () => <DashbordOfC set='de50e42b-9e9c-4ce5-91b6-7a3bd7e99ab5'/>
    },
    {
      title: "Set 14",
      to: "/Set-14",
       exact: true,      
      main : () => <DashbordOfC set='f0485140-ec63-4d80-b3e0-d97ef1030359'/>
    },
    {
      title: "Set 15",
      to: "/Set-15",
       exact: true,      
      main : () => <DashbordOfC set='fc00d94e-2391-4de1-9bb2-ddbf0d1d2400'/>
    },
    
  ],
  path : "/CSS",

},
{
  title : "Javascript Programming",
  icon : <Avatar alt="C" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJIAAACSCAMAAACZpWO8AAAAdVBMVEX33x4AAAD/6B/74x6ZihPPuxkWFAP/5h//6iAnIwTw2x3r1R1GPwh8cA/z3B7eyBsSEALKthkxLAZsYg1CPAhMRQmShBKwnxWklBTArRfkzhxUTApdVAtoXg08NgfTwBoJCAEhHgSEdxC4pxd1ag4cGQM2MQawgTLuAAAEVElEQVR4nO2aa3eqOhBASQZMbBREKy+xVKT9/z/xgudoSQjhIbHnrjV79ROi2SRDMpnUcRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQZCXA0A5r/84Z2C7rbc2fp+Pn6Xu9nw65VWZFMKxqQXefv3DzqWaexgLow1pk7sBtyYF3q7dlkYJnPSddFjlAViSAm9lVqLBuSt0Y2vJaUgJ4h6hmo+C/YISj/qNCPmy4mRWAqNRTWjByahErwNGZJ8tH08mJciGjAjZLG5k7qXtsBKJdDOZLSUoRhjV4bT00BmU+KHT/Odn59L+hUogLopPGYdhmsiipb/4O2dQUl63XAADAOYEx8e1d8/C+mtQkuek3Lk3Ds69o6Llu8io5Mgj1JqAgJ2aK8fAynpiUPKP7Q/y9gBBtiYkdl6eCfjf7Q8iqX0WnzM7XWRW2ksfyF3i2+ois5LUS1vrCfcYJSm3Xf8LSo6cTSb895WglJRWNlKjiUosITKxrfx/tBIUO8XpZG1TMlLJgW+icrCxpk1QourINWxSYdvKlFWKL40TeXeFvZ3ukBLouqnm82A1qIy5tyaa7kFV2KwJmJQy7dDdOBW2Ympgaxn2KhFSOa/Ol27wVJ2c2tiZPAfLFMadU+VbcBos5oCoDE5rC8nuoFKdqyXrfqfV8sWTYaU6oETZZ1Q7BS/c7bZuguCw6nNaLx1Po5Tq23jRW2qqfkep6SmRaMqoDemyTqOVmp7y05NO6WPZHHiCUnM3DapL18lbtJumKTWb76BbCCsXLXtNVWrGL1Mr4Rvxu0pNpCtv32ex5MjNUermwIu+c/OUHP4hKSVLriqDmQDVdgCTS3RPxbea4QycNDGxvep6QMlZqidmJh4odWpI5RGQE12Id2QvNP0EmVTqOcxWYn6yI6n01MpJUtz6EJzwth3INd0EgVRu3s5UAu41tb536bBUeZ9bRWye3XM3zQGAEkszjwjYvQn5kaQBII/kh4mWa9TJsan8xsVz3jjgP7nh9eeZuPy0u7fHdanNEuQ2uSt9bc6hBYDXbiL5+9RAw4v00+f7/fLpcp2npf5jNgAqlGVuzhGY+htV0Bz487dE2Tq6fzuDdTPbPPE5p5Ry3s2b8slC6pt+43TOL+q13SPL8LXZWl6V27x7skPiGdHNjt3f0fD9iBimeYh+pgvpKmpaWhM1HTrVbTFvhRvVwkaasfKxRseZ2RLTZs0y0rwO/rjBJmTu5hKE+l53UFYF8Ec8BZk5Tf5pIeutX/0hV/8rBxxTNeDOM6kSCONIHDWFGabOWx0u8VP5JPiGrX2p3UbTwBzkx+LZvQkNe8Jjk/ZkF8C8/ojaxPqUcxLMuWqi/JKI/oCol0f9fzBs4rdlMu56F+aeW0vwPi8Lav5poCws8/ay/XU8JNmCJV2gTlaksRtFbpx6mT+m82/fCa9JVJNcw0CwBYZMbgGAMUpZc+4/4TtAb0z4EoIgCPJ/4T+yPDbFN+Iz2wAAAABJRU5ErkJggg==" />,        
  url : 'Javascript',
  items: [
    {
      title: "Set 1",
      to: "/Set-1",
       exact: true,      
      main : () => <DashbordOfC set='081b6746-e540-4f8c-b361-5317760c4929'/>
     
    },
    {
      title: "Set 2",
      to: "/Set-2",
       exact: true,      
      main : () => <DashbordOfC set='09ad2c2d-edf4-40df-985c-2028c3d21b5d'/>
    },
    {
      title: "Set 3",
      to: "/Set-3",
       exact: true,      
      main : () => <DashbordOfC set='11848309-bf06-4127-ae86-5f933542e7ae'/>
    },
    {
      title: "Set 4",
      to: "/Set-4",
       exact: true,      
      main : () => <DashbordOfC set='1750fdcb-3fbe-4eaf-bc31-4ae032864314'/>
    },
    {
      title: "Set 5",
      to: "/Set-5",
       exact: true,      
      main : () => <DashbordOfC set='43955d65-658c-4638-be07-4fe13e7caa8b'/>
    },
    {
      title: "Set 6",
      to: "/Set-6",
       exact: true,      
      main : () => <DashbordOfC set='609ac6fd-68cc-43e5-b802-a5c968b72998'/>
    },
    {
      title: "Set 7",
      to: "/Set-7",
       exact: true,      
      main : () => <DashbordOfC set='74da9b68-e14b-4016-8672-21015eb4fbf1'/>
    },
    {
      title: "Set 8",
      to: "/Set-8",
       exact: true,      
      main : () => <DashbordOfC set='79c91241-b083-4002-939a-7dfe78584959'/>
    },
    {
      title: "Set 9",
      to: "/Set-9",
       exact: true,      
      main : () => <DashbordOfC set='85b224bd-0a07-4a17-86d5-91a4b882b036'/>
    },
    {
      title: "Set 10",
      to: "/Set-10",
       exact: true,      
      main : () => <DashbordOfC set='975476f9-e6f1-47e8-970f-36a0922f66ea'/>
    },
    {
      title: "Set 11",
      to: "/Set-11",
       exact: true,      
      main : () => <DashbordOfC set='a46c935f-b8e3-4b75-8c5b-022486fb26a9'/>
    },
    {
      title: "Set 12",
      to: "/Set-12",
       exact: true,      
      main : () => <DashbordOfC set='a5a52ef6-fd6e-4a77-a16f-8f950a888361'/>
    },
    {
      title: "Set 13",
      to: "/Set-13",
       exact: true,      
      main : () => <DashbordOfC set='b71ba310-76a2-47a3-9c39-056eac90ca3d'/>
    },
    {
      title: "Set 14",
      to: "/Set-14",
       exact: true,      
      main : () => <DashbordOfC set='e73dc4b8-7e53-431f-bd3c-0c0c704c39a7'/>
    },
    {
      title: "Set 15",
      to: "/Set-15",
       exact: true,      
      main : () => <DashbordOfC set='f1621bd7-a92a-44cd-b61c-f2f4ced08ae9'/>
    },
   
  ],
  path : "/Javascript",

},
];

export default menu
