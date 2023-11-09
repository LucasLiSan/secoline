function repeatItem(form, formNumber) {

    var srcItem = document.getElementById("item-1");
    var srcMarca = document.getElementById("marca-1");
    var srcModelo = document.getElementById("modelo-1");
    var srcCondicao = document.getElementById("condicao-1");
    var srcLocal = document.getElementById("local-1");
    var srcUe = document.getElementById("ue-1");
    var srcAquisicao = document.getElementById("aquisicao-1");
    var srcValor = document.getElementById("valor-1");
    var srcCor = document.getElementById("cor-1");
    var srcLargura = document.getElementById("largura-1");
    var srcUndMedLarg = document.getElementById("undMedLarg-1");
    var srcAltura = document.getElementById("altura-1");
    var srcUndMedAlt = document.getElementById("undMedAlt-1");
    var srcComprimento = document.getElementById("comprimento-1");
    var srcUndMedComp = document.getElementById("undMedCompr-1");
    var srcEspessura = document.getElementById("espessura-1");
    var srcUndMedEspe = document.getElementById("undMedEspe-1");
    var srcProfundidade = document.getElementById("profundidade-1");
    var srcUndMedProfund = document.getElementById("undMedProfund-1");
    var srcDiametro = document.getElementById("diametro-1");
    var srcUndMedDiametro = document.getElementById("undMedDiametro-1");
    var srcLargTampo = document.getElementById("largTampo-1");
    var srcUndMedLargTampo = document.getElementById("undMedLargTampo-1");
    var srcCompTampo = document.getElementById("compTampo-1");
    var srcUndMedCompTampo = document.getElementById("undMedCompTampo-1");
    var srcEspessuraTampo = document.getElementById("espessuraTampo-1");
    var srcUndMedEspeTampo = document.getElementById("undMedEspeTampo-1");
    var srcAltPernas = document.getElementById("altPernas-1");
    var srcUndMedAltPernas = document.getElementById("undMedAltPernas-1");
    var srcEspessuraPernas = document.getElementById("espessuraPernas-1");
    var srcUndMedEspesPernas = document.getElementById("undMedEspesPernas-1");
    var srcLargPernas = document.getElementById("largPernas-1");
    var srcUndMedLargPernas = document.getElementById("undMedLargPernas-1");
    var srcPerna = document.getElementById("qtdPerna-1");
    var srcPorta = document.getElementById("qtdPorta-1");
    var srcPrateleira = document.getElementById("qtdPrate-1");
    var srcGaveta = document.getElementById("qtdGav-1");
    var srcHelice = document.getElementById("qtdHelice-1");
    var srcVeloc = document.getElementById("qtdVelox-1");
    var srcPolegada = document.getElementById("qtdPol-1");
    var srcBtu = document.getElementById("btu-1");
    var srcAddInfo = document.getElementById("addInfo-1");
    var srcChave = document.querySelector('input[name="chave-1"]:checked');
    var valorsrcChave = srcChave ? srcChave.value : "";

    var dstItem = document.getElementById(`item-${formNumber}`);
    var dstMarca = document.getElementById(`marca-${formNumber}`);
    var dstModelo = document.getElementById(`modelo-${formNumber}`);
    var dstCondicao = document.getElementById(`condicao-${formNumber}`);
    var dstLocal = document.getElementById(`local-${formNumber}`);
    var dstUe = document.getElementById(`ue-${formNumber}`);
    var dstAquisicao = document.getElementById(`aquisicao-${formNumber}`);
    var dstValor = document.getElementById(`valor-${formNumber}`);
    var dstCor = document.getElementById(`cor-${formNumber}`);
    var dstLargura = document.getElementById(`largura-${formNumber}`);
    var dstUndMedLarg = document.getElementById(`undMedLarg-${formNumber}`);
    var dstAltura = document.getElementById(`altura-${formNumber}`);
    var dstUndMedAlt = document.getElementById(`undMedAlt-${formNumber}`);
    var dstComprimento = document.getElementById(`comprimento-${formNumber}`);
    var dstUndMedComp = document.getElementById(`undMedCompr-${formNumber}`);
    var dstEspessura = document.getElementById(`espessura-${formNumber}`);
    var dstUndMedEspe = document.getElementById(`undMedEspe-${formNumber}`);
    var dstProfundidade = document.getElementById(`profundidade-${formNumber}`);
    var dstUndMedProfund = document.getElementById(`undMedProfund-${formNumber}`);
    var dstDiametro = document.getElementById(`diametro-${formNumber}`);
    var dstUndMedDiametro = document.getElementById(`undMedDiametro-${formNumber}`);
    var dstLargTampo = document.getElementById(`largTampo-${formNumber}`);
    var dstUndMedLargTampo = document.getElementById(`undMedLargTampo-${formNumber}`);
    var dstCompTampo = document.getElementById(`compTampo-${formNumber}`);
    var dstUndMedCompTampo = document.getElementById(`undMedCompTampo-${formNumber}`);
    var dstEspessuraTampo = document.getElementById(`espessuraTampo-${formNumber}`);
    var dstUndMedEspeTampo = document.getElementById(`undMedEspeTampo-${formNumber}`);
    var dstAltPernas = document.getElementById(`altPernas-${formNumber}`);
    var dstUndMedAltPernas = document.getElementById(`undMedAltPernas-${formNumber}`);
    var dstEspessuraPernas = document.getElementById(`espessuraPernas-${formNumber}`);
    var dstUndMedEspesPernas = document.getElementById(`undMedEspesPernas-${formNumber}`);
    var dstLargPernas = document.getElementById(`largPernas-${formNumber}`);
    var dstUndMedLargPernas = document.getElementById(`undMedLargPernas-${formNumber}`);
    var dstPerna = document.getElementById(`qtdPerna-${formNumber}`);
    var dstPorta = document.getElementById(`qtdPorta-${formNumber}`);
    var dstPrateleira = document.getElementById(`qtdPrate-${formNumber}`);
    var dstGaveta = document.getElementById(`qtdGav-${formNumber}`);
    var dstHelice = document.getElementById(`qtdHelice-${formNumber}`);
    var dstVeloc = document.getElementById(`qtdVelox-${formNumber}`);
    var dstPolegada = document.getElementById(`qtdPol-${formNumber}`);
    var dstBtu = document.getElementById(`btu-${formNumber}`);
    var dstAddInfo = document.getElementById(`addInfo-${formNumber}`);
    var dstChave = document.querySelector(`input[name="chave-${formNumber}"]`);
    var valordstChave = dstChave ? dstChave.value : "";

    if (dstItem) {
        dstItem.value = srcItem.value;
        dstMarca.value = srcMarca.value;
        dstModelo.value = srcModelo.value;
        dstCondicao.value = srcCondicao.value;
        dstLocal.value = srcLocal.value;
        dstUe.value = srcUe.value;
        dstAquisicao.value = srcAquisicao.value;
        dstValor.value = srcValor.value;
        dstCor.value = srcCor.value;
        dstLargura.value = srcLargura.value;
        dstUndMedLarg.value = srcUndMedLarg.value;
        dstAltura.value = srcAltura.value;
        dstUndMedAlt.value = srcUndMedAlt.value;
        dstComprimento.value = srcComprimento.value;
        dstUndMedComp.value = srcUndMedComp.value;
        dstEspessura.value = srcEspessura.value;
        dstUndMedEspe.value = srcUndMedEspe.value;
        dstProfundidade.value = srcProfundidade.value;
        dstUndMedProfund.value = srcUndMedProfund.value;
        dstDiametro.value = srcDiametro.value;
        dstUndMedDiametro.value = srcUndMedDiametro.value;
        dstLargTampo.value = srcLargTampo.value;
        dstUndMedLargTampo.value = srcUndMedLargTampo.value;
        dstCompTampo.value = srcCompTampo.value;
        dstUndMedCompTampo.value = srcUndMedCompTampo.value;
        dstEspessuraTampo.value = srcEspessuraTampo.value;
        dstUndMedEspeTampo.value = srcUndMedEspeTampo.value;
        dstAltPernas.value = srcAltPernas.value;
        dstUndMedAltPernas.value = srcUndMedAltPernas.value;
        dstEspessuraPernas.value = srcEspessuraPernas.value;
        dstUndMedEspesPernas.value = srcUndMedEspesPernas.value;
        dstLargPernas.value = srcLargPernas.value;
        dstUndMedLargPernas.value = srcUndMedLargPernas.value;
        dstPerna.value = srcPerna.value;
        dstPorta.value = srcPorta.value;
        dstPrateleira.value = srcPrateleira.value;
        dstGaveta.value = srcGaveta.value;
        dstHelice.value = srcHelice.value;
        dstVeloc.value = srcVeloc.value;
        dstPolegada.value = srcPolegada.value;
        dstBtu.value = srcBtu.value;
        dstAddInfo.value = srcAddInfo.value;
        dstChave.value = valorsrcChave.value;
    } else {
        alert("Não há mais campos para copiar neste formulário.");
    }
}
