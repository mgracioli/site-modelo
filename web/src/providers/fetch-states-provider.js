/*******************************************
 * Função responsável por fazer o fetch dos estados brasileiros 
 * que estão no elemento < select > do formulário
 * 
 * @returns Promise
 *******************************************/
export const fetchStates = () => {
    return new Promise((resolve, reject) => {
        const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'

        //fetch é uma API JavaScript que funciona como o axios, para fazer requisições HTTP
        fetch(url, {cache: 'force-cache'})  //force-cache é para forçar o browser a buscar o array de estados no seu cache antes de fazer uma nova requisição à API
        .then(response => {
            if(!response.ok){   //essa verificação é porque o fecth() retorna uma response (Promise) mesmo que tenha havido algum erro no get (erro 404, por exemplo)
                throw new Error('Cannot fetch url - Status: '+response.status)
            }
            return response.json() //o axios converte a response em json automaticamente, o fetch() não
        }) 
        .then(resolve)  //lança o resolve caso tudo ocorra bem com o fetch. Ele indica que a Promise do fecth foi resolvida e está tudo OK, esse then acessa a Promise retornada pelo then anterior. O then sempre precisa retornar uma Promisse. O resolve e o reject são funções que retornam promises com o resultado retornado na promise anteriormente resolvida ou rejeitada
        .catch(reject)  //lança o reject caso algo tenha dado errado
    })
}


/*******************************************
 * Função responsável por 'filtrar' os dados da API 
 * retornando somente as informações (chaves) que eu
 * estou interessado e, não, o objeto completo da API
 * 
 * @param states array de objetos (estados brasileiros)
 * @returns array de objetos JSON
 *******************************************/
export const parseStates = (states) => {
    return states.map((state) => {
        return {
            id: state.id,
            name: state.nome,
            abbr: state.sigla
        }
    })
}