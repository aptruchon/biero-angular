export interface Biere {
    id_biere: number;
    nom: string;
    brasserie: string;
    description?: string;
    image?: string;
    date_ajout?: Date;
    date_modif?: Date;
}
