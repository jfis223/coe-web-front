import type {ConstructorType} from "@/src/common/interfaces/constructor_type";
import type {CMSTeamMember} from "@/src/core/cms_blocks/domain/models/items/cms_team_member";

export class CMSTeam {
    id: number;
    __component: "blocks.team";
    teamMembers: CMSTeamMemberData;

    constructor(input: ConstructorType<CMSTeam>) {
        this.id = input.id;
        this.__component = input.__component;
        this.teamMembers = input.teamMembers;
    }
}

export class CMSTeamMemberData {
    data: CMSTeamMember[];

    constructor(input: ConstructorType<CMSTeamMemberData>) {
        this.data = input.data;
    }
}
