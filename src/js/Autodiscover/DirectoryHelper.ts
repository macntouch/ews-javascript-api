﻿import {ExchangeServiceBase} from "../Core/ExchangeServiceBase";
export class DirectoryHelper {
    Service: ExchangeServiceBase;
    //private service: ExchangeServiceBase;
    private static AutodiscoverMaxScpHops: number = 10;
    private static ScpUrlGuidString: string = "77378F46-2C66-4aa9-A6A6-3E7A48B19596";
    private static ScpPtrGuidString: string = "67661d7F-8FC4-4fa7-BFAC-E1D7794C1F68";
    private static ScpFilterString: string = "(&(objectClass=serviceConnectionPoint)(|(keywords=67661d7F-8FC4-4fa7-BFAC-E1D7794C1F68)(keywords=77378F46-2C66-4aa9-A6A6-3E7A48B19596)))";

    GetAutodiscoverScpUrlsForDomain(domainName: string): string[] { throw new Error("DirectoryHelper.ts - GetAutodiscoverScpUrlsForDomain : Not implemented."); }
    GetScpUrlList(domainName: string, ldapPath: string, maxHops: any): string[] { throw new Error("DirectoryHelper.ts - GetScpUrlList : Not implemented."); }
    GetSiteName(): string { throw new Error("DirectoryHelper.ts - GetSiteName : Not implemented."); }
    TraceMessage(message: string): any { throw new Error("DirectoryHelper.ts - TraceMessage : Not implemented."); }
}



