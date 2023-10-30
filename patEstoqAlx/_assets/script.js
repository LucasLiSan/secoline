function showHideRow(row) {
  // Encontre o próximo elemento com a classe 'hidden_row' a partir do elemento clicado
  var hiddenRow = $(row).next('.hidden_row');

  // Alternar a exibição desse elemento
  hiddenRow.toggle();
}

function moreForm() {
  const newForm = document.getElementById('newForm');
  const morePats = document.createElement('FORM');
  morePats.method='POST';
  morePats.classList.add('formCadastro');
  morePats.innerHTML = 
  `
  <div class="rowForm">
    <div class="colForm">
        <label for="cod">CÓDIGO</label><br>
        <input type="text" name="cod" required>
    </div>
    <div class="colForm">
        <label for="item">ITEM</label><br>
        <input type="text" name="item" id="ipt-2" required>
    </div>
    <div class="colForm">
        <label for="marca">MARCA</label><br>
        <input type="text" name="marca">
    </div>
    <div class="colForm">
        <label for="modelo">MODELO</label><br>
        <input type="text" name="modelo">
    </div>
    <div class="colForm">
        <label for="condicao">CONDIÇÃO</label><br>
        <select name="condicao">
            <option value="" title="" selected="selected"></option>
            <option value="ÓTIMO" title="ÓTIMO">ÓTIMO</option>
            <option value="BOM" title="BOM">BOM</option>
            <option value="REGULAR" title="REGULAR">REGULAR</option>
            <option value="RUIM" title="RUIM">RUIM</option>
            <option value="INSERVÍVEL" title="INSERVÍVEL">INSERVÍVEL</option>
        </select>
    </div>
</div>
<div class="rowForm">
    <div class="colForm">
        <label for="local">LOCAL</label><br>
        <input type="text" name="local" required>
    </div>
    <div class="colForm">
        <label for="ue">UE</label><br>
        <input type="text" name="ue" required>
    </div>
    <div class="colForm">
        <label for="valor">VALOR</label><br>
        <input type="text" name="valor">
    </div>
    <div class="colForm">
        <label for="dataAquisit">DATA AQUISIÇÃO</label><br>
        <input type="date" name="dataAquisit">
    </div>
    <div class="colForm">
        <label for="cor">COR</label><br>
        <input type="text" name="cor">
    </div>
</div>
<div class="rowForm desk">
    <div class="colForm">
        <label for="largura">Largura</label><br>
        <input type="number" name="largura">
        <select name="undMedLarg">
            <option value="" title="" selected="selected"></option>
            <option value="mm" title="mm">MM</option>
            <option value="cm" title="cm">CM</option>
            <option value="m" title="m">M</option>
            <option value="km" title="km">KM</option>
        </select>
    </div>
    <div class="colForm">
        <label for="altura">Altura</label><br>
        <input type="number" name="altura">
        <select name="undMedAlt">
            <option value="" title="" selected="selected"></option>
            <option value="mm" title="mm">MM</option>
            <option value="cm" title="cm">CM</option>
            <option value="m" title="m">M</option>
            <option value="km" title="km">KM</option>
        </select>
    </div>
    <div class="colForm">
        <label for="comprimento">Comprimento</label><br>
        <input type="number" name="comprimento">
        <select name="undMedCompr">
            <option value="" title="" selected="selected"></option>
            <option value="mm" title="mm">MM</option>
            <option value="cm" title="cm">CM</option>
            <option value="m" title="m">M</option>
            <option value="km" title="km">KM</option>
        </select>
    </div>
    <div class="colForm">
        <label for="espessura">espessura</label><br>
        <input type="number" name="espessura">
        <select name="undMedEspe">
            <option value="" title="" selected="selected"></option>
            <option value="mm" title="mm">MM</option>
            <option value="cm" title="cm">CM</option>
            <option value="m" title="m">M</option>
            <option value="km" title="km">KM</option>
        </select>
    </div>
    <div class="colForm">
        <label for="profundidade">profundidade</label><br>
        <input type="number" name="profundidade">
        <select name="undMedProfund">
            <option value="" title="" selected="selected"></option>
            <option value="mm" title="mm">MM</option>
            <option value="cm" title="cm">CM</option>
            <option value="m" title="m">M</option>
            <option value="km" title="km">KM</option>
        </select>
    </div>
</div>
<div class="rowForm desk">
    <div class="colForm">
        <label for="largTampo">largura do tampo</label><br>
        <input  type="number" name="largTampo">
        <select name="undMedLargTampo">
            <option value="" title="" selected="selected"></option>
            <option value="mm" title="mm">MM</option>
            <option value="cm" title="cm">CM</option>
            <option value="m" title="m">M</option>
            <option value="km" title="km">KM</option>
        </select>
    </div>
    <div class="colForm">
        <label for="compTampo">comprimento do Tampo</label><br>
        <input type="number" name="compTampo">
        <select name="undMedCompTampo">
            <option value="" title="" selected="selected"></option>
            <option value="mm" title="mm">MM</option>
            <option value="cm" title="cm">CM</option>
            <option value="m" title="m">M</option>
            <option value="km" title="km">KM</option>
        </select>
    </div>
    <div class="colForm">
        <label for="espessuraTampo">espessura do tampo</label><br>
        <input type="number" name="espessuraTampo">
        <select name="undMedEspeTampo">
            <option value="" title="" selected="selected"></option>
            <option value="mm" title="mm">MM</option>
            <option value="cm" title="cm">CM</option>
            <option value="m" title="m">M</option>
            <option value="km" title="km">KM</option>
        </select>
    </div>
    <div class="colForm">
        <label for="altPernas">Altura das pernas</label><br>
        <input type="number" name="altPernas">
        <select name="undMedAltPernas">
            <option value="" title="" selected="selected"></option>
            <option value="mm" title="mm">MM</option>
            <option value="cm" title="cm">CM</option>
            <option value="m" title="m">M</option>
            <option value="km" title="km">KM</option>
        </select>
    </div>
    <div class="colForm">
        <label for="espessuraPernas">espessura das pernas</label><br>
        <input type="number" name="espessuraPernas">
        <select name="undMedEspesPernas">
            <option value="" title="" selected="selected"></option>
            <option value="mm" title="mm">MM</option>
            <option value="cm" title="cm">CM</option>
            <option value="m" title="m">M</option>
            <option value="km" title="km">KM</option>
        </select>
    </div>
</div>
<div class="rowForm desk">
    <div class="colForm">
        <label for="largPernas">Largura das pernas</label><br>
        <input type="number" name="largPernas">
        <select name="undMedLargPernas">
            <option value="" title="" selected="selected"></option>
            <option value="mm" title="mm">MM</option>
            <option value="cm" title="cm">CM</option>
            <option value="m" title="m">M</option>
            <option value="km" title="km">KM</option>
        </select>
    </div>
</div>
<div class="rowForm">
    <div class="colForm">
        <label for="qtdPernas">qtd. de pernas</label><br>
        <input type="number" name="qtdPernas">
    </div>
    <div class="colForm">
        <label for="qtdPortas">qtd. de portas</label><br>
        <input type="number" name="qtdPortas">
    </div>
    <div class="colForm">
        <label for="qtdPrateleiras">qtd. de prateleiras</label><br>
        <input type="number" name="qtdPrateleiras">
    </div>
    <div class="colForm">
        <label for="qtdGavetas">qtd. de gavetas</label><br>
        <input type="number" name="qtdGavetas">
    </div>
    <div class="colForm">
        <label for="qtdHelices">qtd. de helices</label><br>
        <input type="number" name="qtdHelices">
    </div>
</div>
<div class="rowForm">
    <div class="colForm">
        <label for="qtdVelox">qtd. de velocidades</label><br>
        <input type="number" name="qtdVelox">
    </div>
    <div class="colForm radio">
        <label>CHAVE</label>
        <div class="inptRadio">
            <input type="radio" name="chave" id="sim" value="SIM">
            <label for="sim">SIM</label><br>
            <input type="radio" name="chave" id="nao" value="NÃO">
            <label for="nao">não</label><br>
        </div>
    </div>
    <div class="colForm">
        <label for="qtdGavetas">qtd. de gavetas</label><br>
        <input type="number" name="qtdGavetas">
    </div>
    <div class="colForm">
        <label for="qtdHelices">qtd. de helices</label><br>
        <input type="number" name="qtdHelices">
    </div>
    <div class="colForm">
        <label for="telaPolegadas">Polegadas (tela)</label><br>
        <input type="number" name="telaPolegadas">
    </div>
</div>
<div class="rowForm">
    <div class="colForm">
        <label for="arCondBTU">BTUs (Ar condicionado)</label><br>
        <input type="number" name="arCondBTU">
    </div>
    <div class="colForm">
        <label for="infoAdd">Informação adicional</label><br>
        <input type="text" name="infoAdd" id="addInfo">
    </div>
</div>
<div class="btnForm">
    <span class="spanBtn"><i class="fas fa-paper-plane"></i><input class="button cadastro" type="submit" value="CADASTRAR"></span>
    <span class="spanBtn"><i class="fas fa-plus"></i><input class="button moreItem" type="button" value="+ITEM" onclick="moreForm()"></span>
    <span class="spanBtn"><i class="fas fa-file-import"></i><input class="button repeat" type="button" value="REPETIR"></span>
</div>
  `;
  newForm.appendChild(morePats);
}

function repeatItem() {
  var src = document.getElementById("ipt-1"),
      dst = document.getElementById("ipt-2");

  dst.value = src.value;
}