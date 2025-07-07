import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";


interface Game {
    id: number;
    name: string;
    background_image: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}



const useGames = () => {
    const [error, setError] = useState("");
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        // 修改后的代码工作流程：
        // 
        // 第一次 useEffect 执行：
        // 1. 创建一个新的 controller (我们称之为 controllerA)。
        // 2. 发起请求，使用 controllerA.signal。
        // 3. 模拟卸载：
        //    - 清理函数执行，调用 controllerA.abort()。
        //    - 第一个请求被取消。
        // 
        // 第二次 useEffect 执行：
        // 1. 创建一个全新的 controller (我们称之为 controllerB)。
        // 2. 发起一个新的请求，使用 controllerB.signal。
        //    - 这个 signal 是全新的，没有被取消过。
        // 3. 这个请求会正常进行，并在成功后调用 setGames，更新界面。
        // 4. 当组件最终真正卸载时（例如离开当前页面），
        //    第二次 useEffect 对应的清理函数会执行，调用 controllerB.abort()，
        //    确保没有内存泄漏。
        
        const controller = new AbortController();
        console.log("请求发起");
        
        apiClient.get<FetchGamesResponse>("/games", {
            signal: controller.signal,
        })
        .then((res) => {
            console.log("请求成功");
            setGames(res.data.results);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            console.log("请求失败");
            setError(err.message);
        });
        
        return () => {
            console.log("请求取消");
            controller.abort();
        };
    }, []);

    return { games, error };
}

export default useGames;