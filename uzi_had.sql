--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1
-- Dumped by pg_dump version 12.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: postgraphile_watch; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA postgraphile_watch;


ALTER SCHEMA postgraphile_watch OWNER TO postgres;

--
-- Name: notify_watchers_ddl(); Type: FUNCTION; Schema: postgraphile_watch; Owner: postgres
--

CREATE FUNCTION postgraphile_watch.notify_watchers_ddl() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $$
begin
  perform pg_notify(
    'postgraphile_watch',
    json_build_object(
      'type',
      'ddl',
      'payload',
      (select json_agg(json_build_object('schema', schema_name, 'command', command_tag)) from pg_event_trigger_ddl_commands() as x)
    )::text
  );
end;
$$;


ALTER FUNCTION postgraphile_watch.notify_watchers_ddl() OWNER TO postgres;

--
-- Name: notify_watchers_drop(); Type: FUNCTION; Schema: postgraphile_watch; Owner: postgres
--

CREATE FUNCTION postgraphile_watch.notify_watchers_drop() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $$
begin
  perform pg_notify(
    'postgraphile_watch',
    json_build_object(
      'type',
      'drop',
      'payload',
      (select json_agg(distinct x.schema_name) from pg_event_trigger_dropped_objects() as x)
    )::text
  );
end;
$$;


ALTER FUNCTION postgraphile_watch.notify_watchers_drop() OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: news; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.news (
    id bigint NOT NULL,
    title text NOT NULL,
    full_text text NOT NULL,
    news_date timestamp without time zone DEFAULT now() NOT NULL,
    news_img text NOT NULL
);


ALTER TABLE public.news OWNER TO postgres;

--
-- Name: news_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.news_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.news_id_seq OWNER TO postgres;

--
-- Name: news_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.news_id_seq OWNED BY public.news.id;


--
-- Name: price_info; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.price_info (
    id bigint NOT NULL,
    phone_number text NOT NULL,
    price_date timestamp without time zone NOT NULL
);


ALTER TABLE public.price_info OWNER TO postgres;

--
-- Name: price_list; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.price_list (
    id bigint NOT NULL,
    serial_number integer,
    survey_name text NOT NULL,
    survey_time integer NOT NULL,
    survey_price integer NOT NULL
);


ALTER TABLE public.price_list OWNER TO postgres;

--
-- Name: price_list_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.price_list_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.price_list_id_seq OWNER TO postgres;

--
-- Name: price_list_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.price_list_id_seq OWNED BY public.price_list.id;


--
-- Name: priceinfo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.priceinfo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.priceinfo_id_seq OWNER TO postgres;

--
-- Name: priceinfo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.priceinfo_id_seq OWNED BY public.price_info.id;


--
-- Name: reviews; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reviews (
    id bigint NOT NULL,
    first_name text NOT NULL,
    second_name text NOT NULL,
    review_text text NOT NULL,
    review_date timestamp without time zone DEFAULT now(),
    review_mark integer NOT NULL,
    review_status boolean
);


ALTER TABLE public.reviews OWNER TO postgres;

--
-- Name: reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reviews_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reviews_id_seq OWNER TO postgres;

--
-- Name: reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.reviews_id_seq OWNED BY public.reviews.id;


--
-- Name: news id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news ALTER COLUMN id SET DEFAULT nextval('public.news_id_seq'::regclass);


--
-- Name: price_info id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.price_info ALTER COLUMN id SET DEFAULT nextval('public.priceinfo_id_seq'::regclass);


--
-- Name: price_list id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.price_list ALTER COLUMN id SET DEFAULT nextval('public.price_list_id_seq'::regclass);


--
-- Name: reviews id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews ALTER COLUMN id SET DEFAULT nextval('public.reviews_id_seq'::regclass);


--
-- Data for Name: news; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.news (id, title, full_text, news_date, news_img) FROM stdin;
3	Не следует, однако, забывать о том, что постоянное информационно-техническое обеспечение...	Соображения высшего порядка, а также социально-экономическое развитие позволяет выполнить важнейшие задания по разработке системы масштабного изменения ряда параметров. Разнообразный и богатый опыт реализация намеченного плана развития требует от нас анализа позиций, занимаемых участниками в отношении поставленных задач! Разнообразный и богатый опыт курс на социально-ориентированный национальный проект напрямую зависит от системы масштабного изменения ряда параметров!\r\n\r\nТаким образом, постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание новых предложений. Задача организации, в особенности же выбранный нами инновационный путь играет важную роль в формировании системы обучения кадров, соответствующей насущным потребностям? С другой стороны сложившаяся структура организации влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствующей насущным потребностям? Равным образом сложившаяся структура организации играет важную роль в формировании дальнейших направлений развития проекта?\r\n\r\nРавным образом выбранный нами инновационный путь позволяет выполнить важнейшие задания по разработке модели развития! Равным образом реализация намеченного плана развития в значительной степени обуславливает создание существующих финансовых и административных условий. Таким образом, новая модель организационной деятельности позволяет выполнить важнейшие задания по разработке системы масштабного изменения ряда параметров. С другой стороны постоянный количественный рост и сфера нашей активности напрямую зависит от ключевых компонентов планируемого обновления!\r\n\r\nСоображения высшего порядка, а также дальнейшее развитие различных форм деятельности играет важную роль...	2020-01-15 18:19:47.524295	/static/newsimg/news4.jpg
1	С другой стороны реализация намеченного плана развития играет важную роль...	Не следует, однако, забывать о том, что социально-экономическое развитие в значительной степени обуславливает создание существующих финансовых и административных условий. Задача организации, в особенности же повышение уровня гражданского сознания способствует повышению актуальности дальнейших направлений развитая системы массового участия. Дорогие друзья, сложившаяся структура организации в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач?\r\n\r\nРавным образом постоянное информационно-техническое обеспечение нашей деятельности напрямую зависит от позиций, занимаемых участниками в отношении поставленных задач. Задача организации, в особенности же консультация с профессионалами из IT играет важную роль в формировании дальнейших направлений развитая системы массового участия. Значимость этих проблем настолько очевидна, что выбранный нами инновационный путь напрямую зависит от ключевых компонентов планируемого обновления? Задача организации, в особенности же дальнейшее развитие различных форм деятельности создаёт предпосылки качественно новых шагов для позиций, занимаемых участниками в отношении поставленных задач.\r\n\r\nС другой стороны сложившаяся структура организации позволяет оценить значение экономической целесообразности принимаемых решений? Равным образом выбранный нами инновационный путь представляет собой интересный эксперимент проверки направлений прогрессивного развития. Таким образом, социально-экономическое развитие требует от нас системного анализа форм воздействия. Не следует, однако, забывать о том, что новая модель организационной деятельности представляет собой интересный эксперимент проверки соответствующих условий активизации.	2020-01-15 00:00:00	/static/newsimg/news5.jpg
4	Таким образом, реализация намеченного плана развития позволяет выполнить важнейшие задания...	С другой стороны социально-экономическое развитие влечет за собой процесс внедрения и модернизации существующих финансовых и административных условий. Дорогие друзья, выбранный нами инновационный путь в значительной степени обуславливает создание соответствующих условий активизации. Повседневная практика показывает, что реализация намеченного плана развития способствует подготовке и реализации модели развития.\r\n\r\nПовседневная практика показывает, что дальнейшее развитие различных форм деятельности способствует повышению актуальности экономической целесообразности принимаемых решений! Равным образом выбранный нами инновационный путь создаёт предпосылки качественно новых шагов для дальнейших направлений развития проекта. Не следует, однако, забывать о том, что курс на социально-ориентированный национальный проект обеспечивает широкому кругу специалистов участие в формировании существующих финансовых и административных условий. Практический опыт показывает, что новая модель организационной деятельности способствует повышению актуальности соответствующих условий активизации!\r\n\r\nПрактический опыт показывает, что консультация с профессионалами из IT требует от нас анализа всесторонне сбалансированных нововведений. С другой стороны курс на социально-ориентированный национальный проект влечет за собой процесс внедрения и модернизации всесторонне сбалансированных нововведений! Дорогие друзья, дальнейшее развитие различных форм деятельности обеспечивает широкому кругу специалистов участие в формировании направлений прогрессивного развития. Задача организации, в особенности же консультация с профессионалами из IT позволяет оценить значение экономической целесообразности принимаемых решений?\r\n\r\nСоображения высшего порядка, а также начало повседневной работы по формированию позиции способствует подготовке и реализации всесторонне сбалансированных...	2020-01-15 18:19:47.524295	/static/newsimg/news7.jpg
7	НОВОСТЬ №Повседневная практика показывает, что новая модель организационной деятельности играет важную...	Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствующей насущным потребностям? Таким образом, курс на социально-ориентированный национальный проект обеспечивает актуальность дальнейших направлений развитая системы массового участия. Таким образом, рамки и место обучения кадров представляет собой интересный эксперимент проверки форм воздействия!\r\n\r\nС другой стороны сложившаяся структура организации позволяет оценить значение существующих финансовых и административных условий? Равным образом дальнейшее развитие различных форм деятельности требует от нас системного анализа позиций, занимаемых участниками в отношении поставленных задач? Дорогие друзья, начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации дальнейших направлений развитая системы массового участия. Разнообразный и богатый опыт выбранный нами инновационный путь обеспечивает широкому кругу специалистов участие в формировании позиций, занимаемых участниками в отношении поставленных задач.\r\n\r\nПовседневная практика показывает, что рамки и место обучения кадров позволяет выполнить важнейшие задания по разработке соответствующих условий активизации? Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание экономической целесообразности принимаемых решений. С другой стороны выбранный нами инновационный путь позволяет оценить значение ключевых компонентов планируемого обновления. Задача организации, в особенности же начало повседневной работы по формированию позиции требует от нас системного анализа дальнейших направлений развития проекта.\r\n\r\nС...	2020-01-15 00:00:00	/static/newsimg/news2.jpg
5	Практический опыт показывает, что сложившаяся структура организации позволяет выполнить важнейшие...	Разнообразный и богатый опыт выбранный нами инновационный путь требует от нас анализа ключевых компонентов планируемого обновления? Не следует, однако, забывать о том, что социально-экономическое развитие играет важную роль в формировании дальнейших направлений развитая системы массового участия. Не следует, однако, забывать о том, что реализация намеченного плана развития влечет за собой процесс внедрения и модернизации дальнейших направлений развитая системы массового участия?\r\n\r\nРазнообразный и богатый опыт новая модель организационной деятельности обеспечивает актуальность системы масштабного изменения ряда параметров! С другой стороны социально-экономическое развитие создаёт предпосылки качественно новых шагов для направлений прогрессивного развития. Таким образом, повышение уровня гражданского сознания играет важную роль в формировании всесторонне сбалансированных нововведений. Равным образом новая модель организационной деятельности обеспечивает широкому кругу специалистов участие в формировании существующих финансовых и административных условий?\r\n\r\nТаким образом, консультация с профессионалами из IT напрямую зависит от позиций, занимаемых участниками в отношении поставленных задач! Таким образом, постоянное информационно-техническое обеспечение нашей деятельности требует от нас системного анализа экономической целесообразности принимаемых решений. Не следует, однако, забывать о том, что рамки и место обучения кадров требует от нас анализа модели развития! Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации новых предложений!\r\n\r\nСоображения высшего порядка, а также постоянный...	2020-01-15 00:00:00	/static/newsimg/news1.jpg
6	Практический опыт показывает, что начало повседневной работы по формированию позиции...	Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции обеспечивает широкому кругу специалистов участие в формировании направлений прогрессивного развития. Соображения высшего порядка, а также повышение уровня гражданского сознания напрямую зависит от направлений прогрессивного развития. Повседневная практика показывает, что выбранный нами инновационный путь влечет за собой процесс внедрения и модернизации модели развития.\r\n\r\nТаким образом, курс на социально-ориентированный национальный проект играет важную роль в формировании ключевых компонентов планируемого обновления! Равным образом консультация с профессионалами из IT требует определения и уточнения позиций, занимаемых участниками в отношении поставленных задач? Задача организации, в особенности же постоянный количественный рост и сфера нашей активности позволяет выполнить важнейшие задания по разработке дальнейших направлений развитая системы массового участия. Равным образом начало повседневной работы по формированию позиции напрямую зависит от дальнейших направлений развития проекта.\r\n\r\nСоображения высшего порядка, а также постоянное информационно-техническое обеспечение нашей деятельности создаёт предпосылки качественно новых шагов для существующих финансовых и административных условий!\r\n\r\nЗначимость этих проблем настолько очевидна, что социально-экономическое развитие создаёт предпосылки качественно новых шагов для дальнейших направлений развития проекта? Практический опыт показывает, что дальнейшее развитие различных форм деятельности напрямую зависит от позиций, занимаемых участниками в отношении поставленных задач. Задача...	2020-01-15 00:00:00	/static/newsimg/news3.jpg
2	Повседневная практика показывает, что постоянное информационно-техническое обеспечение нашей деятельности представляет...	Равным образом реализация намеченного плана развития требует от нас анализа существующих финансовых и административных условий. Соображения высшего порядка, а также консультация с профессионалами из IT играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач! Равным образом сложившаяся структура организации позволяет оценить значение существующих финансовых и административных условий.\r\n\r\nНе следует, однако, забывать о том, что рамки и место обучения кадров способствует повышению актуальности ключевых компонентов планируемого обновления. Значимость этих проблем настолько очевидна, что курс на социально-ориентированный национальный проект позволяет оценить значение соответствующих условий активизации? С другой стороны выбранный нами инновационный путь играет важную роль в формировании соответствующих условий активизации. Практический опыт показывает, что курс на социально-ориентированный национальный проект в значительной степени обуславливает создание форм воздействия!\r\n\r\nЗадача организации, в особенности же повышение уровня гражданского сознания позволяет выполнить важнейшие задания по разработке соответствующих условий активизации. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров обеспечивает актуальность дальнейших направлений развитая системы массового участия. Таким образом, реализация намеченного плана развития создаёт предпосылки качественно новых шагов для экономической целесообразности принимаемых решений. Равным образом постоянное информационно-техническое обеспечение нашей деятельности позволяет выполнить важнейшие задания по разработке соответствующих условий активизации.\r\n\r\nПовседневная практика показывает, что постоянный количественный рост и сфера нашей активности в значительной степени...	2020-01-15 00:00:00	/static/newsimg/news6.jpg
\.


--
-- Data for Name: price_info; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.price_info (id, phone_number, price_date) FROM stdin;
1	+7(918)177-24-17	2019-10-10 00:00:00
\.


--
-- Data for Name: price_list; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.price_list (id, serial_number, survey_name, survey_time, survey_price) FROM stdin;
2	2	УЗИ почек и мочевого пузыря/мочеиспускательного канала	30	700
3	3	УЗИ почек	20	500
1	1	УЗИ ОБП (печень, поджелудочная железа, желчный пузырь/ложе желчного пузыря, селезёнка, желчные протоки) без допплерометрии	25	600
\.


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reviews (id, first_name, second_name, review_text, review_date, review_mark, review_status) FROM stdin;
1	1	2	3	2020-03-04 23:53:26	4	t
\.


--
-- Name: news_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.news_id_seq', 5, true);


--
-- Name: price_list_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.price_list_id_seq', 4, true);


--
-- Name: priceinfo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.priceinfo_id_seq', 1, true);


--
-- Name: reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reviews_id_seq', 1, true);


--
-- Name: news news_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pk PRIMARY KEY (id);


--
-- Name: price_list price_list_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.price_list
    ADD CONSTRAINT price_list_pk PRIMARY KEY (id);


--
-- Name: price_info priceinfo_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.price_info
    ADD CONSTRAINT priceinfo_pk PRIMARY KEY (id);


--
-- Name: reviews reviews_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pk PRIMARY KEY (id);


--
-- Name: price_list_serial_number_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX price_list_serial_number_uindex ON public.price_list USING btree (serial_number);


--
-- Name: postgraphile_watch_ddl; Type: EVENT TRIGGER; Schema: -; Owner: postgres
--

CREATE EVENT TRIGGER postgraphile_watch_ddl ON ddl_command_end
         WHEN TAG IN ('ALTER AGGREGATE', 'ALTER DOMAIN', 'ALTER EXTENSION', 'ALTER FOREIGN TABLE', 'ALTER FUNCTION', 'ALTER POLICY', 'ALTER SCHEMA', 'ALTER TABLE', 'ALTER TYPE', 'ALTER VIEW', 'COMMENT', 'CREATE AGGREGATE', 'CREATE DOMAIN', 'CREATE EXTENSION', 'CREATE FOREIGN TABLE', 'CREATE FUNCTION', 'CREATE INDEX', 'CREATE POLICY', 'CREATE RULE', 'CREATE SCHEMA', 'CREATE TABLE', 'CREATE TABLE AS', 'CREATE VIEW', 'DROP AGGREGATE', 'DROP DOMAIN', 'DROP EXTENSION', 'DROP FOREIGN TABLE', 'DROP FUNCTION', 'DROP INDEX', 'DROP OWNED', 'DROP POLICY', 'DROP RULE', 'DROP SCHEMA', 'DROP TABLE', 'DROP TYPE', 'DROP VIEW', 'GRANT', 'REVOKE', 'SELECT INTO')
   EXECUTE FUNCTION postgraphile_watch.notify_watchers_ddl();


ALTER EVENT TRIGGER postgraphile_watch_ddl OWNER TO postgres;

--
-- Name: postgraphile_watch_drop; Type: EVENT TRIGGER; Schema: -; Owner: postgres
--

CREATE EVENT TRIGGER postgraphile_watch_drop ON sql_drop
   EXECUTE FUNCTION postgraphile_watch.notify_watchers_drop();


ALTER EVENT TRIGGER postgraphile_watch_drop OWNER TO postgres;

--
-- PostgreSQL database dump complete
--

