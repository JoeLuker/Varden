-- ===========================================================================
--  DROP TABLES (in reverse dependency order)
-- ===========================================================================

DROP TABLE IF EXISTS character_rpg_entity_properties CASCADE;
DROP TABLE IF EXISTS character_skill_ranks CASCADE;
DROP TABLE IF EXISTS character_rpg_entities CASCADE;
DROP TABLE IF EXISTS base_archetype_feature_replacements CASCADE;
DROP TABLE IF EXISTS base_entity_prerequisites CASCADE;
DROP TABLE IF EXISTS base_conditional_bonuses CASCADE;
DROP TABLE IF EXISTS base_natural_attacks CASCADE;
DROP TABLE IF EXISTS base_weapon_proficiencies CASCADE;
DROP TABLE IF EXISTS base_skill_bonuses CASCADE;
DROP TABLE IF EXISTS base_discoveries CASCADE;
DROP TABLE IF EXISTS base_wild_talents CASCADE;
DROP TABLE IF EXISTS base_corruption_manifestations CASCADE;
DROP TABLE IF EXISTS base_corruptions CASCADE;
DROP TABLE IF EXISTS base_traits CASCADE;
DROP TABLE IF EXISTS base_buffs CASCADE;
DROP TABLE IF EXISTS base_ancestral_traits CASCADE;
DROP TABLE IF EXISTS base_archetypes CASCADE;
DROP TABLE IF EXISTS base_class_features CASCADE;
DROP TABLE IF EXISTS base_feats CASCADE;
DROP TABLE IF EXISTS base_equipment CASCADE;
DROP TABLE IF EXISTS base_attributes CASCADE;
DROP TABLE IF EXISTS rpg_entities CASCADE;

DROP TABLE IF EXISTS base_class_skill_relations CASCADE;
DROP TABLE IF EXISTS base_skills CASCADE;
DROP TABLE IF EXISTS base_classes CASCADE;
DROP TABLE IF EXISTS base_ancestry_ability_modifiers CASCADE;
DROP TABLE IF EXISTS base_ancestries CASCADE;
DROP TABLE IF EXISTS characters CASCADE;

DROP TABLE IF EXISTS ref_favored_class_choices CASCADE;
DROP TABLE IF EXISTS ref_abp_bonus_types CASCADE;
DROP TABLE IF EXISTS ref_buff_types CASCADE;
DROP TABLE IF EXISTS ref_skill_rank_sources CASCADE;
DROP TABLE IF EXISTS ref_bonus_types CASCADE;


-- ===========================================================================
-- 1) REFERENCE TABLES (ref_*)
-- ===========================================================================

CREATE TABLE ref_bonus_types (
    id          BIGSERIAL PRIMARY KEY,
    name        TEXT NOT NULL UNIQUE,
    label       TEXT,
    created_at  TIMESTAMPTZ DEFAULT NOW(),
    updated_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE ref_skill_rank_sources (
    id          BIGSERIAL PRIMARY KEY,
    name        TEXT NOT NULL UNIQUE,
    label       TEXT,
    created_at  TIMESTAMPTZ DEFAULT NOW(),
    updated_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE ref_buff_types (
    id          BIGSERIAL PRIMARY KEY,
    name        TEXT NOT NULL UNIQUE,
    label       TEXT,
    created_at  TIMESTAMPTZ DEFAULT NOW(),
    updated_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE ref_abp_bonus_types (
    id          BIGSERIAL PRIMARY KEY,
    name        TEXT NOT NULL UNIQUE,
    label       TEXT,
    created_at  TIMESTAMPTZ DEFAULT NOW(),
    updated_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE ref_favored_class_choices (
    id          BIGSERIAL PRIMARY KEY,
    name        TEXT NOT NULL UNIQUE,
    label       TEXT,
    created_at  TIMESTAMPTZ DEFAULT NOW(),
    updated_at  TIMESTAMPTZ DEFAULT NOW()
);


-- ===========================================================================
-- 2) CHARACTERS
-- ===========================================================================

CREATE TABLE characters (
    id          BIGSERIAL PRIMARY KEY,
    name        TEXT NOT NULL,
    current_hp  INT NOT NULL DEFAULT 0,
    max_hp      INT NOT NULL DEFAULT 0,
    is_offline  BOOLEAN DEFAULT FALSE,
    created_at  TIMESTAMPTZ DEFAULT NOW(),
    updated_at  TIMESTAMPTZ DEFAULT NOW()
);


-- ===========================================================================
-- 3) THE SUPERTYPE: rpg_entities
-- ===========================================================================

CREATE TABLE rpg_entities (
    id          BIGSERIAL PRIMARY KEY,
    entity_type TEXT NOT NULL,
    name        TEXT NOT NULL,
    description TEXT,
    created_at  TIMESTAMPTZ DEFAULT NOW(),
    updated_at  TIMESTAMPTZ DEFAULT NOW()
);


-- ===========================================================================
-- 4) ANCESTRIES as a Subtype of rpg_entities
-- ===========================================================================

CREATE TABLE base_ancestries (
    id         BIGINT PRIMARY KEY REFERENCES rpg_entities(id) ON DELETE CASCADE,
    size       TEXT NOT NULL DEFAULT 'Medium',
    base_speed INT NOT NULL DEFAULT 30,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE base_ancestry_ability_modifiers (
    id           BIGSERIAL PRIMARY KEY,
    ancestry_id  BIGINT NOT NULL REFERENCES base_ancestries(id) ON DELETE CASCADE,
    ability_name TEXT NOT NULL,
    modifier     INT NOT NULL,
    created_at   TIMESTAMPTZ DEFAULT NOW(),
    updated_at   TIMESTAMPTZ DEFAULT NOW()
);


-- ===========================================================================
-- 5) CLASSES as a Subtype of rpg_entities
-- ===========================================================================

CREATE TABLE base_classes (
    id                      BIGINT PRIMARY KEY REFERENCES rpg_entities(id) ON DELETE CASCADE,
    hit_die                 INT,
    skill_ranks_per_level   INT,
    fort_save_progression   TEXT,
    ref_save_progression    TEXT,
    will_save_progression   TEXT,
    created_at              TIMESTAMPTZ DEFAULT NOW(),
    updated_at              TIMESTAMPTZ DEFAULT NOW()
);


-- ===========================================================================
-- 6) SKILLS as a Subtype of rpg_entities
-- ===========================================================================

CREATE TABLE base_skills (
    id                BIGINT PRIMARY KEY REFERENCES rpg_entities(id) ON DELETE CASCADE,
    ability           TEXT NOT NULL,
    trained_only      BOOLEAN DEFAULT FALSE,
    armor_check_penalty BOOLEAN DEFAULT FALSE,
    created_at        TIMESTAMPTZ DEFAULT NOW(),
    updated_at        TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE base_class_skill_relations (
    id        BIGSERIAL PRIMARY KEY,
    class_id  BIGINT REFERENCES base_classes(id) ON DELETE CASCADE,
    skill_id  BIGINT REFERENCES base_skills(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE (class_id, skill_id)
);


-- ===========================================================================
-- 8) ADDITIONAL SUBTYPES: FEATS, CLASS FEATURES, ETC.
-- ===========================================================================

CREATE TABLE base_feats (
    id         BIGINT PRIMARY KEY REFERENCES rpg_entities(id) ON DELETE CASCADE,
    feat_label TEXT,
    feat_type  TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE base_class_features (
    id          BIGINT PRIMARY KEY REFERENCES rpg_entities(id) ON DELETE CASCADE,
    class_id    BIGINT NOT NULL REFERENCES base_classes(id),
    feature_level INT NOT NULL,
    created_at  TIMESTAMPTZ DEFAULT NOW(),
    updated_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE base_archetypes (
    id         BIGINT PRIMARY KEY REFERENCES rpg_entities(id) ON DELETE CASCADE,
    class_id   BIGINT REFERENCES base_classes(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE base_ancestral_traits (
    id           BIGINT PRIMARY KEY REFERENCES rpg_entities(id) ON DELETE CASCADE,
    ancestry_name TEXT,
    is_optional  BOOLEAN DEFAULT FALSE,
    created_at   TIMESTAMPTZ DEFAULT NOW(),
    updated_at   TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE base_buffs (
    id           BIGINT PRIMARY KEY REFERENCES rpg_entities(id) ON DELETE CASCADE,
    buff_type_id BIGINT REFERENCES ref_buff_types(id),
    created_at   TIMESTAMPTZ DEFAULT NOW(),
    updated_at   TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE base_traits (
    id         BIGINT PRIMARY KEY REFERENCES rpg_entities(id) ON DELETE CASCADE,
    trait_type TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE base_corruptions (
    id                    BIGINT PRIMARY KEY REFERENCES rpg_entities(id) ON DELETE CASCADE,
    corruption_stage      INT,
    manifestation_level   INT,
    created_at            TIMESTAMPTZ DEFAULT NOW(),
    updated_at            TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE base_corruption_manifestations (
    id                        BIGINT PRIMARY KEY REFERENCES rpg_entities(id) ON DELETE CASCADE,
    corruption_id             BIGINT NOT NULL REFERENCES rpg_entities(id) ON DELETE CASCADE,
    min_manifestation_level   INT NOT NULL DEFAULT 1,
    prerequisite_manifestation TEXT,
    created_at                TIMESTAMPTZ DEFAULT NOW(),
    updated_at                TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE base_discoveries (
    id             BIGINT PRIMARY KEY REFERENCES rpg_entities(id) ON DELETE CASCADE,
    discovery_level INT,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE base_wild_talents (
    id            BIGINT PRIMARY KEY REFERENCES rpg_entities(id) ON DELETE CASCADE,
    talent_level  INT,
    created_at    TIMESTAMPTZ DEFAULT NOW(),
    updated_at    TIMESTAMPTZ DEFAULT NOW()
);


-- ===========================================================================
-- 9) NEW SUBTYPES: base_equipment & base_attributes
-- ===========================================================================

CREATE TABLE base_equipment (
    id                BIGINT PRIMARY KEY REFERENCES rpg_entities(id) ON DELETE CASCADE,
    equipment_category TEXT, -- e.g. "weapon", "armor", "tool"
    weight            NUMERIC,
    cost              NUMERIC,
    created_at        TIMESTAMPTZ DEFAULT NOW(),
    updated_at        TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE base_attributes (
    id               BIGINT PRIMARY KEY REFERENCES rpg_entities(id) ON DELETE CASCADE,
    default_value    INT,
    is_core_attribute BOOLEAN DEFAULT TRUE,
    attribute_type   TEXT,
    created_at       TIMESTAMPTZ DEFAULT NOW(),
    updated_at       TIMESTAMPTZ DEFAULT NOW()
);


-- ===========================================================================
-- 10) BRIDGING TABLES FOR "EFFECTS" (Skill Bonuses, etc.)
-- ===========================================================================

CREATE TABLE base_skill_bonuses (
    id         BIGSERIAL PRIMARY KEY,
    entity_id  BIGINT NOT NULL REFERENCES rpg_entities(id) ON DELETE CASCADE,
    skill_name TEXT NOT NULL,
    bonus      INT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE base_weapon_proficiencies (
    id         BIGSERIAL PRIMARY KEY,
    entity_id  BIGINT NOT NULL REFERENCES rpg_entities(id) ON DELETE CASCADE,
    weapon_name TEXT NOT NULL,
    created_at  TIMESTAMPTZ DEFAULT NOW(),
    updated_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE base_natural_attacks (
    id         BIGSERIAL PRIMARY KEY,
    entity_id  BIGINT NOT NULL REFERENCES rpg_entities(id) ON DELETE CASCADE,
    attack_type TEXT NOT NULL,
    damage     TEXT NOT NULL,
    attack_count INT DEFAULT 1,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE base_conditional_bonuses (
    id            BIGSERIAL PRIMARY KEY,
    entity_id     BIGINT NOT NULL REFERENCES rpg_entities(id) ON DELETE CASCADE,
    bonus_type_id BIGINT NOT NULL REFERENCES ref_bonus_types(id),
    value         INT NOT NULL,
    apply_to      TEXT NOT NULL,
    condition     TEXT,
    created_at    TIMESTAMPTZ DEFAULT NOW(),
    updated_at    TIMESTAMPTZ DEFAULT NOW()
);


-- ===========================================================================
-- 11) PREREQUISITES & ARCHETYPE REPLACEMENTS
-- ===========================================================================

CREATE TABLE base_entity_prerequisites (
    id                BIGSERIAL PRIMARY KEY,
    entity_id         BIGINT NOT NULL REFERENCES rpg_entities(id) ON DELETE CASCADE,
    required_entity_id BIGINT REFERENCES rpg_entities(id) ON DELETE CASCADE,
    prereq_type       TEXT,
    prereq_value      TEXT,
    created_at        TIMESTAMPTZ DEFAULT NOW(),
    updated_at        TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE base_archetype_feature_replacements (
    id                  BIGSERIAL PRIMARY KEY,
    archetype_id        BIGINT NOT NULL REFERENCES rpg_entities(id) ON DELETE CASCADE,
    replaced_feature_id BIGINT NOT NULL REFERENCES rpg_entities(id) ON DELETE CASCADE,
    new_feature_id      BIGINT REFERENCES rpg_entities(id) ON DELETE CASCADE,
    replacement_level   INT,
    created_at          TIMESTAMPTZ DEFAULT NOW(),
    updated_at          TIMESTAMPTZ DEFAULT NOW()
);


-- ===========================================================================
-- 12) CHARACTERS -> ENTITIES
-- ===========================================================================

CREATE TABLE character_rpg_entities (
    id           BIGSERIAL PRIMARY KEY,
    character_id BIGINT NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
    entity_id    BIGINT NOT NULL REFERENCES rpg_entities(id) ON DELETE CASCADE,
    is_active    BOOLEAN DEFAULT FALSE,
    created_at   TIMESTAMPTZ DEFAULT NOW(),
    updated_at   TIMESTAMPTZ DEFAULT NOW()
);


-- ===========================================================================
-- 14) SKILL RANKS
-- ===========================================================================

CREATE TABLE character_skill_ranks (
    id             BIGSERIAL PRIMARY KEY,
    character_id   BIGINT NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
    skill_id       BIGINT NOT NULL REFERENCES base_skills(id) ON DELETE CASCADE,
    source_id      BIGINT REFERENCES ref_skill_rank_sources(id),
    applied_at_level INT NOT NULL DEFAULT 1,
    created_at     TIMESTAMPTZ DEFAULT NOW(),
    updated_at     TIMESTAMPTZ DEFAULT NOW()
);


-- ===========================================================================
-- 15) CHARACTER -> ENTITY PROPERTIES (EAV)
-- ===========================================================================

CREATE TABLE character_rpg_entity_properties (
    id                        BIGSERIAL PRIMARY KEY,
    character_rpg_entity_id   BIGINT NOT NULL 
        REFERENCES character_rpg_entities(id) ON DELETE CASCADE,
    property_key              TEXT NOT NULL,
    property_value            TEXT NOT NULL,
    created_at                TIMESTAMPTZ DEFAULT NOW(),
    updated_at                TIMESTAMPTZ DEFAULT NOW()
);


-- ===========================================================================
-- 16) HELPER FUNCTIONS
-- ===========================================================================

CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION ensure_entity_type_matches()
RETURNS TRIGGER AS $$
BEGIN
    /*
      Confirms that the rpg_entities row matched by NEW.id
      has the correct entity_type (passed via TG_ARGV[0])
    */
    PERFORM 1
      FROM rpg_entities
     WHERE id = NEW.id
       AND entity_type = TG_ARGV[0];

    IF NOT FOUND THEN
        RAISE EXCEPTION 'rpg_entities row % is not typed as %', NEW.id, TG_ARGV[0];
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION ensure_multiple_entity_types()
RETURNS TRIGGER AS $$
DECLARE
    pairs   TEXT[] := TG_ARGV;
    pair    TEXT;
    col_name TEXT;
    req_type TEXT;
    actual_id BIGINT;
    dyn_sql TEXT;
BEGIN
    FOREACH pair IN ARRAY pairs
    LOOP
        SELECT split_part(pair,'=',1),
               split_part(pair,'=',2)
          INTO col_name, req_type;

        dyn_sql := format('SELECT ($1).%I::bigint', col_name);
        EXECUTE dyn_sql USING NEW INTO actual_id;

        IF actual_id IS NULL THEN
            CONTINUE;
        END IF;

        PERFORM 1 
          FROM rpg_entities
         WHERE id = actual_id
           AND entity_type = req_type;

        IF NOT FOUND THEN
           RAISE EXCEPTION 
             'Column % => rpg_entities row % is not typed as %, in table %', 
             col_name, actual_id, req_type, TG_TABLE_NAME;
        END IF;
    END LOOP;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- ===========================================================================
-- 17) DYNAMIC TRIGGERS & POLICIES
-- ===========================================================================

DO $$
DECLARE
    all_tables TEXT[];

    /* Subtype combos for ensure_entity_type_matches */
    combos_subtypes TEXT[][] := ARRAY[
      ARRAY['base_ancestries','ancestry'],
      ARRAY['base_classes','class'],
      ARRAY['base_skills','skill'],
      ARRAY['base_feats','feat'],
      ARRAY['base_class_features','class_feature'],
      ARRAY['base_archetypes','archetype'],
      ARRAY['base_ancestral_traits','ancestral_trait'],
      ARRAY['base_buffs','buff'],
      ARRAY['base_traits','trait'],
      ARRAY['base_corruptions','corruption'],
      ARRAY['base_corruption_manifestations','corruption_manifestation'],
      ARRAY['base_discoveries','discovery'],
      ARRAY['base_wild_talents','wild_talent'],
      ARRAY['base_equipment','equipment'],
      ARRAY['base_attributes','attribute']
    ];

    /*
      Pairs for ensure_multiple_entity_types 
      e.g. bridging tables that reference multiple different subtypes
    */
    combos_multiples TEXT[][] := ARRAY[
      ARRAY[
         'base_archetype_feature_replacements',
         'trg_archetype_feature_replacements_check',
         'archetype_id=archetype',
         'replaced_feature_id=class_feature'
      ],
      ARRAY[
         'base_entity_prerequisites',
         'trg_entity_prerequisites_check',
         'entity_id=feat',
         'required_entity_id=feat'
      ],
      ARRAY[
         'base_class_skill_relations',
         'trg_class_skills_check',
         'class_id=class',
         'skill_id=skill'
      ]
    ];

    t TEXT;
    c TEXT[];
    t_table TEXT;
    t_trigger TEXT;
    t_pairs TEXT;
BEGIN

    SELECT array_agg(table_name)
      INTO all_tables
      FROM information_schema.tables
     WHERE table_schema = 'public'
       AND table_type = 'BASE TABLE';

    ---------------------------------------------------------------------------
    -- (1) Create BEFORE UPDATE triggers for update_timestamp() on each table
    ---------------------------------------------------------------------------
    FOREACH t IN ARRAY all_tables
    LOOP
        EXECUTE format(
            $f$
              CREATE TRIGGER trg_%I_update
              BEFORE UPDATE ON %I
              FOR EACH ROW
              EXECUTE PROCEDURE update_timestamp()
            $f$, t, t
        );
    END LOOP;

    ---------------------------------------------------------------------------
    -- (2) Generate subtype triggers with ensure_entity_type_matches
    ---------------------------------------------------------------------------
    FOREACH c SLICE 1 IN ARRAY combos_subtypes
    LOOP
        EXECUTE format(
          $f$
            CREATE TRIGGER trg_ensure_%1$I_type
            BEFORE INSERT OR UPDATE ON %1$I
            FOR EACH ROW
            EXECUTE PROCEDURE ensure_entity_type_matches('%2$s');
          $f$, c[1], c[2]
        );
    END LOOP;

    ---------------------------------------------------------------------------
    -- (3) Generate triggers for multiple entity-type checks
    ---------------------------------------------------------------------------
    FOREACH c SLICE 1 IN ARRAY combos_multiples
    LOOP
        t_table  := c[1];
        t_trigger := c[2];
        t_pairs   := c[3];

        EXECUTE format($f$
          CREATE TRIGGER %I
          BEFORE INSERT OR UPDATE ON %I
          FOR EACH ROW
          EXECUTE PROCEDURE ensure_multiple_entity_types(%L)
        $f$, t_trigger, t_table, t_pairs);
    END LOOP;

    ---------------------------------------------------------------------------
    -- (4) Supabase Realtime publication, open policy, REPLICA IDENTITY
    ---------------------------------------------------------------------------
    FOREACH t IN ARRAY all_tables
    LOOP
        EXECUTE format('ALTER PUBLICATION supabase_realtime ADD TABLE %I', t);

        EXECUTE format($f$
            CREATE POLICY "Public realtime access"
            ON %I
            FOR ALL
            USING (true)
            WITH CHECK (true)
        $f$, t);

        EXECUTE format('ALTER TABLE %I REPLICA IDENTITY FULL', t);
    END LOOP;

END;
$$;
