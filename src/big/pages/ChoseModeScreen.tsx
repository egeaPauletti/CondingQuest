
import "../customClasses.css";
import SideBar from "../components/SideBar";

export default function ChoseModeScreen() {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="flex w-[95%] h-[90%] items-center justify-center rounded-3xl backgroundColor gap-20 profileShadow relative">
          <SideBar />

          <div className="flex flex-col items-center gap-10 w-full h-full p-10 text-white font-['Roboto']">
            {/*Título*/}
            <div
              className="w-[600px] h-[80px] flex items-center justify-center rounded-xl"
              style={{
                backgroundColor: '#232429',
                boxShadow: '4px 4px 6px rgba(35, 36, 41, 0.4)',
              }}
            >
              <h1 className="text-xl font-bold">Escolha um modo de Jogo</h1>
            </div>

            {/*Cards*/}
            <div
              className="w-[1050px] h-[375px] flex justify-between"
              style={{ marginTop: '20px', marginLeft: '20px' }}
            >
              {/*Modo Campanha*/}
              <div className="w-[250px] h-full bg-[#232429] border-[2px] border-[#24C97B] rounded-[20px] p-4 flex flex-col justify-between items-center hover:scale-105 transition-transform">
                <div className="text-center mt-[20px]">
                  <h2 className="text-[20px] font-bold text-[#24C97B] mb-[15px]">{'{Modo Campanha}'}</h2>
                  <p className="text-[16px] font-medium text-white leading-tight">
                    Jogue o Modo Campanha e viaje pelos mundos resolvendo seus desafios.
                  </p>
                </div>
                <button
                  className="text-white text-sm font-bold rounded-[10px] mb-[20px] border border-[#4A3DF9] bg-[#6C62FF] hover:bg-[#887EFF]"
                  style={{
                    width: '120px',
                    height: '34.2px',
                    boxShadow: 'inset 0 -4px 0 0 #4A3DF9',
                  }}
                >
                  Jogar!!
                </button>
              </div>

              {/*Desafio Diário*/}
              <div className="w-[250px] h-full bg-[#232429] border-[2px] border-[#24C97B] rounded-[20px] p-4 flex flex-col justify-between items-center hover:scale-105 transition-transform">
                <div className="text-center mt-[20px]">
                  <h2 className="text-[20px] font-bold text-[#24C97B] mb-[15px]">{'{Desafio Diário}'}</h2>
                  <p className="text-[16px] font-medium text-white leading-tight">
                    Resolva um novo desafio todos os dias,<br />
                    quantos dias você consegue?
                  </p>
                </div>
                <button
                  className="text-white text-sm font-bold rounded-[10px] mb-[20px] border border-[#4A3DF9] bg-[#6C62FF] hover:bg-[#887EFF]"
                  style={{
                    width: '120px',
                    height: '34.2px',
                    boxShadow: 'inset 0 -4px 0 0 #4A3DF9',
                  }}
                >
                  Jogar!!
                </button>
              </div>

              {/*Cooperativo */}
              <div className="w-[250px] h-full bg-[#232429] border-[2px] border-[#24C97B]/20 rounded-[20px] p-4 flex flex-col justify-between items-center text-center relative">
                <div className="opacity-20 mt-[20px]">
                  <h2 className="text-[20px] font-bold text-[#24C97B] mb-[15px]">{'{Cooperativo}'}</h2>
                  <p className="text-[16px] font-medium text-white leading-tight">
                    Junto de outros jogadores,<br />
                    resolva desafios em modo<br />
                    cooperativo.
                  </p>
                </div>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] text-white font-bold text-3xl w-[136px] h-[38px] flex items-center justify-center">
                  Em Breve
                </span>
              </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
