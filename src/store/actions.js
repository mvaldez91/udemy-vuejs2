import config from '../config';

export const loadData = ({commit})=>{
    fetch(config.BASE_URL + config.BASE_FIREBASE_STORE)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            if (data){
                commit('SET_STOCKS', data.stocks);
                commit('SET_PORTFOLIO', {
                    funds: data.funds,
                    stockPortfolio: data.stockPortfolio
                })
            }
        });
};