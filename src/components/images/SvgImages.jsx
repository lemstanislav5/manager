export const SvgImages = (props) => {
  const { svg, fill } = props;
  return (
    <>
      {svg === 'open' &&
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"/>
        </svg>
      }
      {svg === 'send' &&
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154l.215.338 7.494-7.494Z"/>
        </svg>
      }
      {svg === 'close' &&
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      }
      {svg === 'backСall' &&
        <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
          <path fillRule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.471 17.471 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z"/>
        </svg>
      }
      {svg === 'openChat' &&
        <svg height="50px" width="50px" version="1.1" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 58 58" >
        <g>
        <path fill={props.fill} d="M53,3.293H5c-2.722,0-5,2.278-5,5v33c0,2.722,2.278,5,5,5h27.681l-4.439-5.161
          c-0.36-0.418-0.313-1.05,0.106-1.41c0.419-0.36,1.051-0.312,1.411,0.106l4.998,5.811L43,54.707v-8.414h2h6h2c2.722,0,5-2.278,5-5
          v-33C58,5.571,55.722,3.293,53,3.293z"/>
        <circle fill="#FFFFFF" cx="15" cy="24.799" r="3"/>
        <circle fill="#FFFFFF" cx="29" cy="24.799" r="3"/>
        <circle fill="#FFFFFF" cx="43" cy="24.799" r="3"/>
        </g>
        </svg>
      }
      {svg === 'daw' &&
        <svg xmlns="http://www.w3.org/2000/svg" fill={fill} x="0px" y="0px" width="14" height="24" viewBox="0 0 24 24">
          <path d="M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z"></path>
        </svg>
      }
      {svg === 'line' &&
        <svg xmlns="http://www.w3.org/2000/svg" fill={fill} x="0px" y="0px" width="14" height="24" viewBox="0 0 24 24">
          <path d="M 20.293 5.293 L 9 16.5859 L 7 17 L 9 19.4141 L 21.707 6.707 L 20.293 5.293 z"></path>
        </svg>
      }
      {svg === 'attachment' &&
        <svg height="21px" width="21px" version="1.1" id="_x32_" viewBox="0 0 512 512" >
     <g>
       <path fill="#000" d="M454.821,253.582L273.256,435.14c-11.697,11.697-25.124,20.411-39.484,26.235
         c-21.529,8.729-45.165,10.928-67.755,6.55c-22.597-4.378-44.054-15.25-61.597-32.784c-11.69-11.69-20.396-25.118-26.227-39.484
         c-8.729-21.529-10.929-45.165-6.55-67.748c4.386-22.597,15.25-44.055,32.778-61.596l203.13-203.13
         c7.141-7.134,15.299-12.43,24.035-15.969c13.1-5.318,27.516-6.656,41.263-3.994c13.769,2.677,26.798,9.27,37.498,19.963
         c7.133,7.134,12.423,15.292,15.968,24.035c5.318,13.092,6.657,27.502,3.987,41.264c-2.67,13.762-9.262,26.783-19.955,37.498
         L213.261,363.064c-2.534,2.528-5.375,4.364-8.436,5.61c-4.571,1.851-9.661,2.335-14.495,1.396
         c-4.848-0.954-9.355-3.225-13.15-7.006c-2.534-2.534-4.364-5.368-5.603-8.429c-1.865-4.571-2.342-9.668-1.402-14.495
         c0.947-4.841,3.225-9.355,7.005-13.149l175.521-175.528l-29.616-29.617l-175.528,175.52c-6.536,6.536-11.505,14.182-14.801,22.313
         c-4.941,12.195-6.166,25.473-3.702,38.202c2.449,12.73,8.686,24.989,18.503,34.799c6.543,6.55,14.182,11.519,22.305,14.809
         c12.202,4.948,25.473,6.165,38.21,3.702c12.722-2.449,24.989-8.678,34.806-18.511L439.97,195.602
         c11.142-11.149,19.571-24.113,25.167-37.917c8.394-20.717,10.48-43.314,6.294-64.971c-4.179-21.643-14.73-42.432-31.46-59.155
         c-11.149-11.142-24.114-19.571-37.918-25.166c-20.717-8.401-43.314-10.48-64.971-6.301c-21.643,4.186-42.431,14.737-59.155,31.468
         L74.803,236.695c-15.713,15.691-27.552,33.931-35.426,53.352c-11.817,29.154-14.765,60.97-8.863,91.462
         c5.888,30.478,20.717,59.696,44.29,83.254c15.698,15.713,33.931,27.552,53.36,35.426c29.146,11.811,60.97,14.758,91.455,8.863
         c30.478-5.895,59.696-20.717,83.254-44.29l181.566-181.564L454.821,253.582z"/>
     </g>
     </svg>
      }
      {svg === 'documents' &&
        <svg fill="#fff" width="40px" height="40px" viewBox="-274.15 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 161c-16.5 0-30 13.5-30 30v827.8c0 16.5 13.5 30 30 30h591.7c16.5 0 30-13.5 30-30V343.7L469 161H30zm389.6 60v134.8c0 19.9 16.3 36.2 36.2 36.2h135.9v596.8H60V221h359.6z"/>
          <path d="M123.8 768.6h394.8v50H123.8zm0-124.6h394.8v50H123.8zm0-124.5h394.8v50H123.8z"/>
          <circle cx="194" cy="382.3" r="60"/>
        </svg>
      }
      {svg === 'play' &&
        <svg width="40px" height="40px" viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#fff" strokeWidth="2"/>
          <path d="M10.9 8.8L10.6577 8.66152C10.1418 8.36676 9.5 8.73922 9.5 9.33333L9.5 14.6667C9.5 15.2608 10.1418 15.6332 10.6577 15.3385L10.9 15.2L15.1 12.8C15.719 12.4463 15.719 11.5537 15.1 11.2L10.9 8.8Z" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      }
      {svg === 'pause' &&
        <svg width="40px" height="40px" viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#fff" strokeWidth="2"/>
          <path d="M14 9L14 15" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 9L10 15" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      }
      {svg === 'record' &&
        <svg fill={fill} width="30px" height="30px" viewBox="1 4 10 33" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.656 11.25v-2.969c0-1.906 1.719-3.5 3.906-3.5 2.156 0 3.906 1.594 3.906 3.5v2.969h-7.813zM13.188 11.438v5.969c-1.281 3.5-5.063 4.031-5.063 4.031v3.969h4.156v1.781h-11.438v-1.781h4.188v-3.969s-3.75-0.531-5.031-4.031v-5.969l1.531-0.719v5.438s0.469 3.656 5.031 3.656 5.094-3.656 5.094-3.656v-5.438zM10.469 12.281v2.688c0 1.906-1.75 3.5-3.906 3.5-2.188 0-3.906-1.594-3.906-3.5v-2.688h7.813z"></path>
        </svg>
      }
      {svg === 'playError' &&
        <svg width="40px" height="40px" viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M10.2071 10.2929C9.81658 9.90237 9.18342 9.90237 8.79289 10.2929C8.40237 10.6834 8.40237 11.3166 8.79289 11.7071L10.5858 13.5L8.79289 15.2929C8.40237 15.6834 8.40237 16.3166 8.79289 16.7071C9.18342 17.0976 9.81658 17.0976 10.2071 16.7071L12 14.9142L13.7929 16.7071C14.1834 17.0976 14.8166 17.0976 15.2071 16.7071C15.5976 16.3166 15.5976 15.6834 15.2071 15.2929L13.4142 13.5L15.2071 11.7071C15.5976 11.3166 15.5976 10.6834 15.2071 10.2929C14.8166 9.90237 14.1834 9.90237 13.7929 10.2929L12 12.0858L10.2071 10.2929ZM12.482 1.99989C13.1608 1.99885 13.7632 1.99793 14.3196 2.2284C14.876 2.45887 15.3014 2.88551 15.7806 3.36624C16.7302 4.31875 17.6813 5.26983 18.6338 6.21942C19.1145 6.69867 19.5412 7.12401 19.7716 7.68041C20.0021 8.23682 20.0012 8.83926 20.0001 9.51807C19.9963 12.034 20 14.5499 20 17.0659C20.0001 17.9524 20.0001 18.7162 19.9179 19.3278C19.8297 19.9833 19.631 20.6117 19.1213 21.1214C18.6117 21.631 17.9833 21.8298 17.3278 21.9179C16.7161 22.0001 15.9523 22.0001 15.0658 22H8.9342C8.0477 22.0001 7.28388 22.0001 6.67221 21.9179C6.0167 21.8298 5.38835 21.631 4.87868 21.1214C4.36902 20.6117 4.17028 19.9833 4.08215 19.3278C3.99991 18.7162 3.99995 17.9524 4 17.0659L4.00001 7.00004C4.00001 6.97802 4 6.95607 4 6.93421C3.99995 6.04772 3.99991 5.28391 4.08215 4.67224C4.17028 4.01673 4.36902 3.38838 4.87869 2.87872C5.38835 2.36905 6.0167 2.17031 6.67221 2.08218C7.28387 1.99994 8.04769 1.99998 8.93418 2.00003C10.1168 2.0001 11.2994 2.00171 12.482 1.99989Z" fill="#323232"/>
        </svg>
      }
      {svg === 'Telegram' &&
        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 512 512">
          <rect width="512" height="512" rx="15%" fill="#37aee2"/>
          <path fill="#c8daea" d="M199 404c-11 0-10-4-13-14l-32-105 245-144"/>
          <path fill="#a9c9dd" d="M199 404c7 0 11-4 16-8l45-43-56-34"/>
          <path fill="#f6fbfe" d="M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4"/>
        </svg>
      }
      {svg === 'VKontakte' &&
        <svg width="30" height="30" viewBox="0 0 202 202" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" rx="15%" fill="#5181b8"/>
          <path id="Logo" fillRule='evenodd' clipRule='evenodd' fill="#fff" d="M162.2 71.1c.9-3 0-5.1-4.2-5.1h-14c-3.6 0-5.2 1.9-6.1 4 0 0-7.1 17.4-17.2 28.6-3.3 3.3-4.7 4.3-6.5 4.3-.9 0-2.2-1-2.2-4V71.1c0-3.6-1-5.1-4-5.1H86c-2.2 0-3.6 1.7-3.6 3.2 0 3.4 5 4.2 5.6 13.6v20.6c0 4.5-.8 5.3-2.6 5.3-4.7 0-16.3-17.4-23.1-37.4-1.4-3.7-2.7-5.3-6.3-5.3H42c-4 0-4.8 1.9-4.8 4 0 3.7 4.7 22.1 22.1 46.4C70.9 133 87.2 142 102 142c8.9 0 10-2 10-5.4V124c0-4 .8-4.8 3.7-4.8 2.1 0 5.6 1 13.9 9 9.5 9.5 11.1 13.8 16.4 13.8h14c4 0 6-2 4.8-5.9-1.3-3.9-5.8-9.6-11.8-16.4-3.3-3.9-8.2-8-9.6-10.1-2.1-2.7-1.5-3.9 0-6.2 0-.1 17.1-24.1 18.8-32.3z"/>
        </svg>
      }
      {svg === 'WhatsApp' &&
        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 512 512">
          <rect width="512" height="512" rx="15%" fill="#25d366"/>
          <path fill="#25d366" stroke="#ffffff" strokeWidth="26" d="M123 393l14-65a138 138 0 1150 47z"/>
          <path fill="#ffffff" d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"/>
        </svg>
      }
    </>
  );
}
