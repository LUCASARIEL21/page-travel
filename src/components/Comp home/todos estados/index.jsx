import React from "react";
import { useState } from "react";
import Ac from "../../estados/AC";
import Al from "../../estados/AL";
import Am from "../../estados/AM";
import Ap from "../../estados/AP";
import Ba from "../../estados/BA";
import Ce from "../../estados/CE";
import Df from "../../estados/DF";
import Es from "../../estados/ES";
import Go from "../../estados/GO";
import Ma from "../../estados/MA";
import Mg from "../../estados/MG";
import Ms from "../../estados/MS";
import Mt from "../../estados/MT";
import Pa from "../../estados/PA";
import Pb from "../../estados/PB";
import Pe from "../../estados/PE";
import Pi from "../../estados/PI";
import Pr from "../../estados/PR";
import Rj from "../../estados/RJ";
import Rn from "../../estados/RN";
import Ro from "../../estados/RO";
import Rr from "../../estados/RR";
import Rs from "../../estados/RS";
import Sc from "../../estados/SC";
import Se from "../../estados/SE";
import Sp from "../../estados/SP";
import To from "../../estados/TO";
import * as S from "./styles";

const Estados = () => {
  const [modalAc, setModalAc] = useState(false);
  const [modalAl, setModalAl] = useState(false);
  const [modalAm, setModalAm] = useState(false);
  const [modalAp, setModalAp] = useState(false);
  const [modalBa, setModalBa] = useState(false);
  const [modalCe, setModalCe] = useState(false);
  const [modalDf, setModalDf] = useState(false);
  const [modalEs, setModalEs] = useState(false);
  const [modalGo, setModalGo] = useState(false);
  const [modalMa, setModalMa] = useState(false);
  const [modalMg, setModalMg] = useState(false);
  const [modalMs, setModalMs] = useState(false);
  const [modalMt, setModalMt] = useState(false);
  const [modalPa, setModalPa] = useState(false);
  const [modalPb, setModalPb] = useState(false);
  const [modalPe, setModalPe] = useState(false);
  const [modalPi, setModalPi] = useState(false);
  const [modalPr, setModalPr] = useState(false);
  const [modalRj, setModalRj] = useState(false);
  const [modalRn, setModalRn] = useState(false);
  const [modalRo, setModalRo] = useState(false);
  const [modalRr, setModalRr] = useState(false);
  const [modalRs, setModalRs] = useState(false);
  const [modalSc, setModalSc] = useState(false);
  const [modalSe, setModalSe] = useState(false);
  const [modalSp, setModalSp] = useState(false);
  const [modalTo, setModalTo] = useState(false);

  return (
    <S.Container>
      <S.colum1>
        <S.btnAc
          onClick={() => {
            setModalAc(true);
          }}
        >
          <img
            src="https://s2.glbimg.com/PxgkV_JmUFwY4A1gW8NM17PmkEA=/0x0:1079x573/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/G/m/5Tiv5iSWAqNKt53ivWGw/whatsapp-image-2021-06-14-at-14.08.36.jpeg"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnAc>
        {modalAc && (
          <Ac modal={modalAc} closeModal={setModalAc} disable={true} />
        )}
        <S.btnAl
          onClick={() => {
            setModalAl(true);
          }}
        >
          <img
            src="https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/296404/97ae7de9ba2c246cc2b8e6d645f36d44orla/16,18,1164,695/670,400,0.38/0/default.jpg"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnAl>
        {modalAl && (
          <Al modal={modalAl} closeModal={setModalAl} disable={true} />
        )}
        <S.btnAm
          onClick={() => {
            setModalAm(true);
          }}
        >
          <img
            src="https://s4.static.brasilescola.uol.com.br/be/2022/05/floresta-amazonica-rio-amazonas.jpg"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnAm>
        {modalAm && (
          <Am modal={modalAm} closeModal={setModalAm} disable={true} />
        )}
        <S.btnAp
          onClick={() => {
            setModalAp(true);
          }}
        >
          <img
            src="https://amapaecocamping.com.br/wp-content/uploads/2020/10/Macapa-capital-do-estado-do-Amapa-1024x768.jpeg"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnAp>
        {modalAp && (
          <Ap modal={modalAp} closeModal={setModalAp} disable={true} />
        )}
        <S.btnBa
          onClick={() => {
            setModalBa(true);
          }}
        >
          <img
            src="https://blog.123milhas.com/wp-content/uploads/2022/04/conheca-estado-bahia-conexao123.jpg"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnBa>
        {modalBa && (
          <Ba modal={modalBa} closeModal={setModalBa} disable={true} />
        )}
      </S.colum1>
      <S.colum2>
        <S.btnCe
          onClick={() => {
            setModalCe(true);
          }}
        >
          <img
            src="https://www.ceara.gov.br/wp-content/uploads/2019/06/FOTO-TIAGO-STILLE_TS2091.jpg"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnCe>
        {modalCe && (
          <Ce modal={modalCe} closeModal={setModalCe} disable={true} />
        )}
        <S.btnDf
          onClick={() => {
            setModalDf(true);
          }}
        >
          <img
            src="https://static.todamateria.com.br/upload/di/st/distrito-federal-og.jpg"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnDf>
        {modalDf && (
          <Df modal={modalDf} closeModal={setModalDf} disable={true} />
        )}
        <S.btnEs
          onClick={() => {
            setModalEs(true);
          }}
        >
          <img
            src="https://www.vidadeturista.com/wp-content/uploads/2020/07/ponte-vitoria-espirito-santo.jpg"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnEs>
        {modalEs && (
          <Es modal={modalEs} closeModal={setModalEs} disable={true} />
        )}
        <S.btnGo
          onClick={() => {
            setModalGo(true);
          }}
        >
          <img
            src="https://i.pinimg.com/originals/17/2c/17/172c178e2ab43356366f9dfb59a885c0.png"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnGo>
        {modalGo && (
          <Go modal={modalGo} closeModal={setModalGo} disable={true} />
        )}
        <S.btnMa
          onClick={() => {
            setModalMa(true);
          }}
        >
          <img
            src="https://brasiltravelnews.com.br/wp-content/uploads/2020/08/Tutoia-Maranhao-Pequenos-Lencois.jpg-e1598364283582.png"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnMa>
        {modalMa && (
          <Ma modal={modalMa} closeModal={setModalMa} disable={true} />
        )}
      </S.colum2>
      <S.colum3>
        <S.btnMg
          onClick={() => {
            setModalMg(true);
          }}
        >
          <img
            src="https://direcional.com.br/wp-content/uploads/2021/08/minas-gerais.jpg"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnMg>
        {modalMg && (
          <Mg modal={modalMg} closeModal={setModalMg} disable={true} />
        )}
        <S.btnMs
          onClick={() => {
            setModalMs(true);
          }}
        >
          <img
            src="https://jcconcursos.com.br/media/_versions/noticia/campo_grande_-_mato_grosso_do_sul_-_foto-_silas_ismael_widelg.jpg"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnMs>
        {modalMs && (
          <Ms modal={modalMs} closeModal={setModalMs} disable={true} />
        )}
        <S.btnMt
          onClick={() => {
            setModalMt(true);
          }}
        >
          <img
            src="https://www.sonoticias.com.br/wp-content/uploads/2020/04/fdgfhdnjgf-fhdthtd-990x556.jpg"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnMt>
        {modalMt && (
          <Mt modal={modalMt} closeModal={setModalMt} disable={true} />
        )}
        <S.btnPa
          onClick={() => {
            setModalPa(true);
          }}
        >
          <img
            src="https://i0.wp.com/edilenemafra.com/wp-content/uploads/2021/01/cidade-de-Belem-capital-do-Para-Foto-Governo-do-Para.jpg?fit=1280%2C720&ssl=1"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnPa>
        {modalPa && (
          <Pa modal={modalPa} closeModal={setModalPa} disable={true} />
        )}
        <S.btnPb
          onClick={() => {
            setModalPb(true);
          }}
        >
          <img
            src="https://compartilheviagens.com.br/wp-content/uploads/2019/03/DESTAQUEjoaopessoa-1.jpg"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnPb>
        {modalPb && (
          <Pb modal={modalPb} closeModal={setModalPb} disable={true} />
        )}
      </S.colum3>
      <S.colum4>
        <S.btnPe
          onClick={() => {
            setModalPe(true);
          }}
        >
          <img
            src="https://www.viaggiamo.it/wp-content/uploads/2016/02/recife-brazil-6-4-1172678-1280x960.jpg"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnPe>
        {modalPe && (
          <Pe modal={modalPe} closeModal={setModalPe} disable={true} />
        )}
        <S.btnPi
          onClick={() => {
            setModalPi(true);
          }}
        >
          <img
            src="https://blog.queroumnegocio.com.br/wp-content/uploads/2020/03/bom-negocio-em-teresina-pi-20200319181949.jpg.jpg"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnPi>
        {modalPi && (
          <Pi modal={modalPi} closeModal={setModalPi} disable={true} />
        )}
        <S.btnPr
          onClick={() => {
            setModalPr(true);
          }}
        >
          <img
            src="https://4.bp.blogspot.com/-rcat8B482lk/Ts-QO4gunxI/AAAAAAAABh4/lmFJnR0Zc3g/s1600/Curitiba.jpg"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnPr>
        {modalPr && (
          <Pr modal={modalPr} closeModal={setModalPr} disable={true} />
        )}
        <S.btnRj
          onClick={() => {
            setModalRj(true);
          }}
        >
          <img
            src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/03/1-cristo-redentor.jpg"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnRj>
        {modalRj && (
          <Rj modal={modalRj} closeModal={setModalRj} disable={true} />
        )}
        <S.btnRn
          onClick={() => {
            setModalRn(true);
          }}
        >
          <img
            src="http://www.abihrn.com.br/wp-content/uploads/2018/08/ar-mais-puro.jpg"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnRn>
        {modalRn && (
          <Rn modal={modalRn} closeModal={setModalRn} disable={true} />
        )}
      </S.colum4>
      <S.colum5>
        <S.btnRo
          onClick={() => {
            setModalRo(true);
          }}
        >
          <img
            src="https://1.bp.blogspot.com/-WjATpQ5sDnY/UTTVN59HSNI/AAAAAAAAKVg/IUlM9i5bG7U/s1600/PORTO+VELHO.jpg%C3%87%C3%87.jpg"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnRo>
        {modalRo && (
          <Ro modal={modalRo} closeModal={setModalRo} disable={true} />
        )}
        <S.btnRr
          onClick={() => {
            setModalRr(true);
          }}
        >
          <img
            src="https://s2.glbimg.com/jwVN6r1FOG3BZL-1yvAb_n-pdSE=/0x0:5407x3605/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/V/9/uHLoNHQwKoOH9i63Zdxg/foto-1-sozinha-a-capital-de-roraima-concentra-65-1-da-populacao-do-estado-segundo-o-ibge.jpg"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnRr>
        {modalRr && (
          <Rr modal={modalRr} closeModal={setModalRr} disable={true} />
        )}
        <S.btnRs
          onClick={() => {
            setModalRs(true);
          }}
        >
          <img
            src="https://s1.static.brasilescola.uol.com.br/be/2021/04/porto-alegre.jpg"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnRs>
        {modalRs && (
          <Rs modal={modalRs} closeModal={setModalRs} disable={true} />
        )}
        <S.btnSc
          onClick={() => {
            setModalSc(true);
          }}
        >
          <img
            src="https://www.rvempreendimentos.com.br/wp-content/uploads/2021/10/santa-catarina-e-o-estado-mais-feliz-do-mundo.jpg"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnSc>
        {modalSc && (
          <Sc modal={modalSc} closeModal={setModalSc} disable={true} />
        )}
        <S.btnSe
          onClick={() => {
            setModalSe(true);
          }}
        >
          <img
            src="https://blog.123milhas.com/wp-content/uploads/2022/07/sergipe-conexao123.jpg"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnSe>
        {modalSe && (
          <Se modal={modalSe} closeModal={setModalSe} disable={true} />
        )}
      </S.colum5>
      <S.colum6>
        <S.btnSp
          onClick={() => {
            setModalSp(true);
          }}
        >
          <img
            src="https://classic.exame.com/wp-content/uploads/2019/10/sc3a3o-paulo-1.jpg?quality=70&strip=info&w=1024"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnSp>
        {modalSp && (
          <Sp modal={modalSp} closeModal={setModalSp} disable={true} />
        )}
        <S.btnTo
          onClick={() => {
            setModalTo(true);
          }}
        >
          <img
            src="https://3.bp.blogspot.com/-L6q9Es5mjmg/Tn5pyNsGZBI/AAAAAAAAC-A/lVWQV_Xih2Y/s1600/aaa.jpg"
            style={{ height: "150px", width: "200px" }}
          />
        </S.btnTo>
        {modalTo && (
          <To modal={modalTo} closeModal={setModalTo} disable={true} />
        )}
      </S.colum6>
    </S.Container>
  );
};

export default Estados;
